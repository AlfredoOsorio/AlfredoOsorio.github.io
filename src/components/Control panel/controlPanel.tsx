import ControlButtonForSection from "./controlButton";

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

function ControlPanel() {
  return (
    <div className="controls">
      <ControlButtonForSection
        buttonIcon={faHome}
        positionOfControlButton={1}
        data_idName="home"
        isItActiveButton={true}
      />

      <ControlButtonForSection
        buttonIcon={faUser}
        positionOfControlButton={2}
        data_idName="about"
        isItActiveButton={false}
      />

      <ControlButtonForSection
        buttonIcon={faBriefcase}
        positionOfControlButton={3}
        data_idName="portfolio"
        isItActiveButton={false}
      />

      <ControlButtonForSection
        buttonIcon={faNewspaper}
        positionOfControlButton={4}
        data_idName="blogs"
        isItActiveButton={false}
      />

      <ControlButtonForSection
        buttonIcon={faEnvelopeOpen}
        positionOfControlButton={5}
        data_idName="contact"
        isItActiveButton={false}
      />
    </div>
  );
}

export default ControlPanel;
