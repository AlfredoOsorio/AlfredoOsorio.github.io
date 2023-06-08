import React from "react";
import "./App.css";
import ControlPanel from "./components/controlPanel"

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

        <ControlPanel/>

      </body>
    </div>
  );
}

export default App;
