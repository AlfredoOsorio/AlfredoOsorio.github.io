import "./App.scss";
import ControlPanel from "./components/Control panel/controlPanel";
import MainSectionAbout from "./components/Sections/About/mainSectionAbout";
import MainSectionHeader from "./components/Sections/Header/mainSectionHeader"
import MainSectionPortfolio from "./components/Sections/Portfolio Section/mainSectionPortfolio";

function App() {
  return (
    <div className="App">
      <body className="main-content">
        <MainSectionHeader />
        <main>
          <MainSectionAbout />
          
          <MainSectionPortfolio />
          <section className="section section4 contacts" id="contact"></section>
        </main>

        <ControlPanel />
      </body>
    </div>
  );
}

export default App;
