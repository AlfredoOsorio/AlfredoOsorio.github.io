import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ContactItemProps {
  buttonIcon: IconDefinition;
  contactItemName: string;
  contactItemInfo: string;
}

function ContactItem(props: ContactItemProps) {
  const { buttonIcon, contactItemName, contactItemInfo } = props;

  return (
    <div className="contact-item">
      <div className="contact-item-name">
        <FontAwesomeIcon className="contact-icon" icon={buttonIcon} />
        {contactItemName}:
      </div>
      <p>{contactItemInfo}</p>
    </div>
  );
}

export default ContactItem;
