import PageTransition from "./pageTransition";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ControlButtonProps {
  buttonIcon: IconDefinition;
  positionOfControlButton: number;
  isItActiveButton: boolean;
  data_idName: string;
}

function ControlButtonForSection(props: ControlButtonProps) {
  const { buttonIcon, positionOfControlButton, data_idName, isItActiveButton } =
    props;

  const controlButtonClasses = isItActiveButton
    ? `control-${positionOfControlButton} control active-button`
    : `control-${positionOfControlButton} control`;

  return (
    <div
      className={controlButtonClasses}
      data-id={data_idName}
      onClick={() => PageTransition(positionOfControlButton)}
    >
      <FontAwesomeIcon icon={buttonIcon} className="control-button-icon" />
    </div>
  );
}

export default ControlButtonForSection;
