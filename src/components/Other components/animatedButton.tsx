import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface AnimatedButtonProps {
  buttonLink?: string;
  spanButtonInfo: string;
  spanButtonIcon: IconDefinition;

}

function AnimatedButton(props: AnimatedButtonProps) {
  const { buttonLink, spanButtonInfo, spanButtonIcon } = props;

  return (
    <div className="button-container">
      <a href={buttonLink} className="animated-button">
        <span className="animated-button-text">{spanButtonInfo}</span>
        <span className="animated-button-icon">
          <FontAwesomeIcon icon={spanButtonIcon} />
        </span>
      </a>
    </div>
  );
}

export default AnimatedButton;
