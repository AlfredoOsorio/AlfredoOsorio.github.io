function PageTransition(clickedButtonID_Number: number) {
  const clickedButtonID: string =
    ".control-" + clickedButtonID_Number.toString();
  const clickedSectionID: string =
    ".section" + clickedButtonID_Number.toString();

  let currentButton = document.querySelectorAll(".active-btn");
  let clickedButton = document.querySelectorAll(clickedButtonID);

  let currentSection = document.querySelectorAll(".active");
  let clickedSection = document.querySelectorAll(clickedSectionID);

  currentButton[0].className = currentButton[0].className.replace(
    " active-btn",
    ""
  );

  clickedButton[0].className = clickedButton[0].className.concat(" active-btn");

  currentSection[0].className = currentSection[0].className.replace(
    " active",
    ""
  );

  clickedSection[0].className = clickedSection[0].className.concat(" active");
}

export default PageTransition;
