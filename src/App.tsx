import React from 'react';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faR, fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(fas);
library.add(faR);

function App() {
  return (
    <div className="App">
      <body className="main-content">
        <header className="section sec1 ehader active">
        </header>
        <main>
        <FontAwesomeIcon icon={faHome} />
          <section className="section sec2 about"></section>
          <section className="section sec3 portfolio"></section>
          <section className="section sec4 blogs"></section>
          <section className="section sec5 contacts"></section>
        </main>

        <div className="controls">
          <div className="control control-1">
            
          </div>
          <div className="control control-2"></div>
          <div className="control control-3"></div>
          <div className="control control-4"></div>
          <div className="control control-5"></div>
        </div>
      </body>
    </div>
  );
}

export default App;
