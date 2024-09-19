import "./styles/App.scss";
import ControlPanel from "./components/Control panel/controlPanel";
import DarkThemeButton from "./components/Control panel/darkThemeButton";
import MainSectionAbout from "./components/Sections/About/mainSectionAbout";
import MainSectionContact from "./components/Sections/Contact/mainSectionContact";
import MainSection from "./components/Sections/Main Section/mainSection";
import MainSectionPortfolio from "./components/Sections/Portfolio Section/mainSectionPortfolio";

function App() {
  return (
    <div className="App main-content">
      <main>
        <MainSection />

        <MainSectionAbout />

        <MainSectionPortfolio />

        <MainSectionContact />
      </main>

      <ControlPanel />

      <DarkThemeButton />
    </div>
  );
}

export default App;
