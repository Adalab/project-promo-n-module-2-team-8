"use strict";

const collapsable = document.querySelector(".js__collapsable");
const fieldset = document.querySelector(".js__fieldset");
// debugger;
function handleClick() {
  fieldset.classList.toggle("hidden");
  collapsable.classList.toggle("form__arrow--rotate");
}
collapsable.addEventListener("click", handleClick);
