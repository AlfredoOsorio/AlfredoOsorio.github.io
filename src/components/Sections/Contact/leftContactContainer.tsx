import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import ContactItem from "./contactItem";

function LeftContactContainer() {
  return (
    <div className="left-contact-container">
      <h4>Contact me here</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit odit esse
        blanditiis explicabo aut debitis dolores soluta molestiae? Beatae
        voluptates inventore aut molestias minima, molestiae enim ad commodi
        distinctio ipsa.
      </p>
      <div className="contact-info">
        <ContactItem
          buttonIcon={faLocationDot}
          contactItemName={"Location"}
          contactItemInfo={"Vigo, Spain"}
        />
        <ContactItem
          buttonIcon={faPhone}
          contactItemName={"Number"}
          contactItemInfo={"+34 633 492 895"}
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
    </div>
  );
}

export default LeftContactContainer;
