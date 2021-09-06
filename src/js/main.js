"use strict";

const collapsable = document.querySelectorAll(".js__collapsable");
const design = document.querySelector(".js-design");
const fill = document.querySelector(".js-fill");
const share = document.querySelector(".js-share");

for (let i = 0; i < collapsable.length; i++) {
  collapsable[i].addEventListener("click", handleClick);
}

function handleClick(ev) {
  ev.currentTarget.classList.toggle("form__arrow--rotate");

  const fieldset =
    ev.currentTarget.parentNode.parentNode.querySelector(".js__fieldset");
  fieldset.classList.toggle("hidden");
}

const form = document.querySelector(".form");

function handlerFormData(ev) {
  const inputId = ev.target.id;

  const inputValue = ev.target.value;
  if (inputId === "fullname") {
    document.querySelector(".photo__card--name").innerHTML = inputValue;
  } else if (inputId === "job") {
    document.querySelector(".photo__card--frontend").innerHTML = inputValue;
  } else if (inputId === "telFill") {
    document.querySelector("#telLink").href = "tel:" + inputValue;
  } else if (inputId === "emailFill") {
    document.querySelector("#emailLink").href = "mailto:" + inputValue;
  } else if (inputId === "linkedinFill") {
    document.querySelector("#linkedinLink").href =
      "https://www.linkedin.com/in/:" + inputValue;
  } else if (inputId === "githubFill") {
    document.querySelector("#githubLink").href =
      "https://github.com/" + inputValue;
  }

  console.log(inputId, inputValue);
}

form.addEventListener("change", handlerFormData);
