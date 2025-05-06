import Header from './components/Header/Header.jsx';
import CoreConcept from './components/Coreconcept.jsx';


import Example from './components/Example.jsx';

import { useState, Fragment } from 'react';

function App() {  

    return (
      <Fragment>
        <Header/>
        <main>
          <CoreConcept/>
          <Example/>
        </main>
      </Fragment>
    );
}

export default App;
