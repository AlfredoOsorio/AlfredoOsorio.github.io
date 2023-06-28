import "./App.css";
import ControlPanel from "./components/controlPanel";
import MainHeaderSection from "./components/mainHeaderSection"

function App() {
  return (
    <div className="App">
      <body className="main-content">
        <MainHeaderSection />
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
