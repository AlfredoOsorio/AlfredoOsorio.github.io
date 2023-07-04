import "./App.scss";
import ControlPanel from "./components/controlPanel";
import MainSectionAbout from "./components/mainSectionAbout";
import MainSectionHeader from "./components/mainSectionHeader"

function App() {
  return (
    <div className="App">
      <body className="main-content">
        <MainSectionHeader />
        <main>
          <MainSectionAbout />
          
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
