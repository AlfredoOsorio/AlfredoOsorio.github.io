import React from "react";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ControlButtonProps {
  buttonIcon: IconDefinition;
  positionOfControlButton: number;
  isItActiveButton: boolean;
  data_idName: string;
}

function ControlButtonSection(props: ControlButtonProps) {
  const { buttonIcon, positionOfControlButton, data_idName, isItActiveButton } =
    props;

  const combinedClasses = isItActiveButton
    ? `control-${positionOfControlButton} control active-btn`
    : `control-${positionOfControlButton} control`;

  return (
    <div className={combinedClasses} data-id={data_idName}>
      <FontAwesomeIcon icon={buttonIcon} />
    </div>
  );
}

export default ControlButtonSection;
