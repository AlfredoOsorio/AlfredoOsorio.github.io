import React from "react";

const sections = document.querySelectorAll('.section');
const sectionAllButtons = document.querySelectorAll('.controls');
const sectionButton = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransition() {
    for(let i = 0; i < sectionButton.length; i++){
        sectionButton[i].addEventListener("click", function(){
            let currentButton = document.querySelectorAll('.active-btn');
            currentButton[0].className = currentButton[0].className.replace(' active-btn', '');
            currentButton[3].className += ' active-btn';
        })
    }
}

export default PageTransition;