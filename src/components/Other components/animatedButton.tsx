import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface AnimatedButtonProps {
  buttonLink: string;
  buttonClassType: string;
  spanClassNameOfButtonName: string;
  spanButtonInfo: string;
  spanClassNameOfButtonIcon: string;
  spanButtonIcon: IconDefinition;

}

function AnimatedButton(props: AnimatedButtonProps) {
  const { buttonLink, buttonClassType, spanClassNameOfButtonName, spanButtonInfo, spanClassNameOfButtonIcon, spanButtonIcon } = props;

  return (
    <div className="buttonContainer">
      <a href={buttonLink} className={buttonClassType}>
        <span className={spanClassNameOfButtonName}>{spanButtonInfo}</span>
        <span className={spanClassNameOfButtonIcon}>
          <FontAwesomeIcon icon={spanButtonIcon} />
        </span>
      </a>
    </div>
  );
}

export default AnimatedButton;
