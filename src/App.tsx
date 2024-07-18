import "./App.scss";
import ControlPanel from "./components/Control panel/controlPanel";
import DarkThemeButton from "./components/Control panel/darkThemeButton";
import MainSectionAbout from "./components/Sections/About/mainSectionAbout";
import MainSectionContact from "./components/Sections/Contact/mainSectionContact";
import MainSectionHeader from "./components/Sections/Header/mainSectionHeader";
import MainSectionPortfolio from "./components/Sections/Portfolio Section/mainSectionPortfolio";

function App() {
  return (
    <div className="App">
      <body className="main-content">
        <MainSectionHeader />
        <main>
          <MainSectionAbout />

          <MainSectionPortfolio />

          <MainSectionContact />
        </main>

        <ControlPanel />

        <DarkThemeButton />
      </body>
    </div>
  );
}

export default App;
