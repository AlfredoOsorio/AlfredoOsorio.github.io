function PageTransition(clickedButtonID: number) {
  let currentButton = document.querySelectorAll(".active-btn");
  let clickedButton = document.querySelectorAll(
    ".control-" + clickedButtonID.toString()
  );

  currentButton[0].className = currentButton[0].className.replace(
    " active-btn",
    ""
  );

  clickedButton[0].className = clickedButton[0].className.concat(" active-btn");
}

export default PageTransition;
