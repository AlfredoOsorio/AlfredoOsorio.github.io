import React from "react";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ControlProps {
  buttonIcon: IconDefinition;
  positionOfControlButton: string;
  isItActiveButton: boolean;
  data_idName: string;
}

export function Control(props: ControlProps) {
  const { buttonIcon, positionOfControlButton, data_idName, isItActiveButton } =
    props;

  const combinedClasses = isItActiveButton
    ? `${positionOfControlButton} control active-btn`
    : `${positionOfControlButton} control`;

  return (
    <div className={combinedClasses} data-id={data_idName}>
      <FontAwesomeIcon icon={buttonIcon} />
    </div>
  );
}
