"use strict";

const collapsable = document.querySelectorAll(".js__collapsable");

for (let i = 0; i < collapsable.length; i++) {
    collapsable[i].addEventListener("click", handleClick);
}

function handleClick(ev) {
    ev.currentTarget.classList.toggle("form__arrow--rotate");

    const fieldset = ev.currentTarget.parentNode.parentNode.querySelector(".js__fieldset");
    fieldset.classList.toggle("hidden");
}
// let data{
//     {
//         palette: ,
//         name: "",
//         job: "",
//         phone: "",
//         email: "",z
//         linkedin: "",
//         github: "",
//         photo: ""
//       }
// }
const form =document.querySelector(".form");

function handlerFormData(ev){

    const inputId= ev.target.id;
    const inputValue= ev.target.value;

    console.log(inputId, inputValue);
}

form.addEventListener("change", handlerFormData);
