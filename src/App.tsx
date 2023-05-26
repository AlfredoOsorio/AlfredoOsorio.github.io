import React from "react";
import "./App.css";
import { Control } from "./components/control";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faUser,
  faBriefcase,
  faNewspaper,
  faEnvelopeOpen,
  faR,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <body className="main-content">
        <header className="section sec1 ehader active"></header>
        <main>
          <section className="section sec2 about"></section>
          <section className="section sec3 portfolio"></section>
          <section className="section sec4 blogs"></section>
          <section className="section sec5 contacts"></section>
        </main>

        <div className="controls">

          <Control buttonIcon={faHome} positionOfControlButton="control-1" data_idName="header" isItActiveButton={true}/>

          <Control buttonIcon={faUser} positionOfControlButton="control-2" data_idName="about" isItActiveButton={false}/>

          <Control buttonIcon={faBriefcase} positionOfControlButton="control-3" data_idName="portfolio" isItActiveButton={false}/>

          <Control buttonIcon={faNewspaper} positionOfControlButton="control-4" data_idName="blogs" isItActiveButton={false}/>

          <Control buttonIcon={faEnvelopeOpen} positionOfControlButton="control-5" data_idName="contact" isItActiveButton={false}/>
        </div>
      </body>
    </div>
  );
}

export default App;
