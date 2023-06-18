import React from "react";
import "./App.css";
import ControlPanel from "./components/controlPanel";

function App() {
  return (
    <div className="App">
      <body className="main-content">
        <header className="section section1 header active" id="home"></header>
        <main>
          <section className="section section2 about" id="about"></section>
          <section className="section section3 portfolio" id="portfolio"></section>
          <section className="section section4 blogs" id="blogs"></section>
          <section className="section section5 contacts" id="contact"></section>
        </main>

        <ControlPanel />
      </body>
    </div>
  );
}

export default App;
