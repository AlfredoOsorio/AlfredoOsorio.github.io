import {
  faLocationDot,
  faEnvelope,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import ContactItem from "./contactItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function LeftContactContainer() {
  return (
    <div className="left-contact-container">
      <h4>Contact me here</h4>
      <div className="contact-info">
        <ContactItem
          buttonIcon={faLocationDot}
          contactItemName={"Location"}
          contactItemInfo={"Vigo, Spain"}
        />
        <ContactItem
          buttonIcon={faEnvelope}
          contactItemName={"Email"}
          contactItemInfo={"alfredoosorioa@gmail.com"}
        />
        <ContactItem
          buttonIcon={faLanguage}
          contactItemName={"Languages"}
          contactItemInfo={"English, Spanish"}
        />
      </div>
      <div className="contact-social-networks-icons">
        <a
          href="https://github.com/AlfredoOsorio"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="contact-social-networks-icon"
            icon={faGithub}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/alfredo-osorio-2a7156119/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="contact-social-networks-icon"
            icon={faLinkedin}
          />
        </a>
      </div>
    </div>
  );
}

export default LeftContactContainer;
