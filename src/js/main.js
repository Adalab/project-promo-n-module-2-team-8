/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable quotes */
"use strict";

//**************************** COLLAPSABLE*********************************//

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
//**************************** FILL*********************************//
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

//****************************  palette selection*********************************//

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

function handleGetImage(e) {
    console.log(e);
}

//**************************** image preview*********************************//

const fr = new FileReader();

const getFile = document.querySelector(".js__input");

const profileImage = document.querySelector(".photo__card--photo");
const profilePreview = document.querySelector(".photo__square");

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function handleGetImage(e) {
    const myFile = e.currentTarget.files[0];
    fr.addEventListener("load", writeImage);
    fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
    /* En la propiedad `result` de nuestro FR se almacena
     * el resultado. Ese resultado de procesar el fichero que hemos cargado
     * podemos pasarlo como background a la imagen de perfil y a la vista previa
     * de nuestro componente.
     */
    profileImage.style.backgroundImage = `url(${fr.result})`;
    profilePreview.style.backgroundImage = `url(${fr.result})`;
}

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
/*function fakeFileClick() {
  fileField.click();
}*/

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */

getFile.addEventListener("change", handleGetImage);