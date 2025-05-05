import Header from './components/Header/Header.jsx';
import CoreConcept from './components/Coreconcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './components/Button/TabButton.jsx';
import TabButtonV2 from './components/Button/TabButtonV2.jsx';
import TabButtonV3 from './components/Button/TabButtonV3.jsx';
import { EXAMPLES } from './data.js';
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
