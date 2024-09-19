function PageTransition(clickedButtonID_Number: number) {
  const clickedButtonID: string =
    ".control-" + clickedButtonID_Number.toString();
  const clickedSectionID: string =
    ".section" + clickedButtonID_Number.toString();

  let currentButton = document.querySelectorAll(".active-button");
  let clickedButton = document.querySelectorAll(clickedButtonID);

  let currentSection = document.querySelectorAll(".active-section");
  let clickedSection = document.querySelectorAll(clickedSectionID);

  currentButton[0].className = currentButton[0].className.replace(
    " active-button",
    ""
  );

  clickedButton[0].className = clickedButton[0].className.concat(" active-button");

  currentSection[0].className = currentSection[0].className.replace(
    " active-section",
    ""
  );

  clickedSection[0].className = clickedSection[0].className.concat(" active-section");
}

export default PageTransition;
