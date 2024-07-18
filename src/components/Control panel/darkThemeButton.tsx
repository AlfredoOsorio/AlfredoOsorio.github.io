import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import ThemeChanger from "./themeChanger";

function DarkThemeButton() {
  return (
    <div className="theme-button" data-id="theme" onClick={() => ThemeChanger()}>
      <FontAwesomeIcon icon={faAdjust} className="theme-button-icon" />
    </div>
  );
}

export default DarkThemeButton;
