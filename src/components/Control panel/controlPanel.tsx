import ControlButtonForSection from "./controlButton";

import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";

function ControlPanel() {
  return (
    <div className="control-panel">
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
        buttonIcon={faEnvelopeOpen}
        positionOfControlButton={4}
        data_idName="contact"
        isItActiveButton={false}
      />
    </div>
  );
}

export default ControlPanel;
