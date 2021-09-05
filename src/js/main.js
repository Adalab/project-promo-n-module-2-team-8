/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable quotes */
"use strict";

const collapsable = document.querySelectorAll(".js__collapsable");

for (let i = 0; i < collapsable.length; i++) {
    collapsable[i].addEventListener("click", handleClick);
}

function handleClick(ev) {
    ev.currentTarget.classList.toggle("form__arrow--rotate");

    const fieldset =
        ev.currentTarget.parentNode.parentNode.querySelector(".js__fieldset");
    fieldset.classList.toggle("hidden");
}
// palette selection

const photoPalette = document.querySelector(".js-photo");
const palette1 = document.querySelector(".js-palette-1");
const palette2 = document.querySelector(".js-palette-2");
const palette3 = document.querySelector(".js-palette-3");

function changeColors(event) {
    if (event.currentTarget.value === "palette-1") {
        photoPalette.classList.add("palette-1");
        photoPalette.classList.remove("palette-2");
        photoPalette.classList.remove("palette-3");
    } else if (event.currentTarget.value === "palette-2") {
        photoPalette.classList.remove("palette-1");
        photoPalette.classList.add("palette-2");
        photoPalette.classList.remove("palette-3");
    } else if (event.currentTarget.value === "palette-3") {
        photoPalette.classList.remove("palette-1");
        photoPalette.classList.remove("palette-2");
        photoPalette.classList.add("palette-3");
    }
}

palette1.addEventListener("click", changeColors);
palette2.addEventListener("click", changeColors);
palette3.addEventListener("click", changeColors);