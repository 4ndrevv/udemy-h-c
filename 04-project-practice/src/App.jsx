import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSideBar";

import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleSelectedProject(id){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
  });
  }

  function handleCancelAddProject(){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
  });
  }

  function handleAddProject(projectData){
    setProjectState((prevState) => {
      const projectId = Math.random();

      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    });
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content = <SelectedProject project={selectedProject}/> ;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
      onStartAddProject={handleStartAddProject} 
      projects={projectState.projects}
      onSelectedProject={handleSelectedProject} />
      {content}
    </main>
  );
}

export default App;
