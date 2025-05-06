import { useState, Fragment } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from './Button/TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Example() {
    const [selectedTopic, setSelectedTopic] =  useState('');

  let tabContent = <p>Please select topic</p>;

  if(selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    )
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
    return (
      <Section title="Examples" id="examples">
      <Tabs 
      //ButtonComponent="menu" // "div" // {Section} 
      buttons={
        <>
          <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
        </>
      }>
        {tabContent}
      </Tabs>
    </Section>
);


}

