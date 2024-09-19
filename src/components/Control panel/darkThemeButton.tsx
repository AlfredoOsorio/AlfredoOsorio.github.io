import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import ToggleTheme from "./toggleTheme";

function DarkThemeButton() {
  return (
    <div className="theme-button" data-id="theme" onClick={ToggleTheme}>
      <FontAwesomeIcon icon={faAdjust} className="theme-button-icon" />
    </div>
  );
}

export default DarkThemeButton;
