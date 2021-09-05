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

function handleGetImage(e) {
  console.log(e);
}

// codigo copiado //

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
