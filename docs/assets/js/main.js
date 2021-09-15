"use strict";
const collapsable = document.querySelectorAll(".js__collapsable"),
  design = document.querySelector(".design__check"),
  designArrow = document.querySelector(".design__arrow"),
  fill = document.querySelector(".fill__form"),
  fillArrow = document.querySelector(".fill__arrow"),
  share = document.querySelector(".dropdown"),
  shareArrow = document.querySelector(".share__arrow");
for (let e = 0; e < collapsable.length; e++)
  collapsable[e].addEventListener("click", handleClick);
function handleClick(e) {
  e.currentTarget.classList.toggle("form__arrow--rotate");
  const t =
    e.currentTarget.parentNode.parentNode.querySelector(".js__fieldset");
  console.log(t.parentNode.classList.value), t.classList.toggle("hidden");
  const r = t.parentNode.classList;
  console.log(t.classList),
    "design__legend" === r.value
      ? (fill.classList.add("hidden"),
        fillArrow.classList.remove("form__arrow--rotate"),
        share.classList.add("hidden"),
        shareArrow.classList.remove("form__arrow--rotate"))
      : "fill" === r.value
      ? (design.classList.add("hidden"),
        designArrow.classList.remove("form__arrow--rotate"),
        share.classList.add("hidden"),
        shareArrow.classList.remove("form__arrow--rotate"))
      : "share" === r.value &&
        (design.classList.add("hidden"),
        designArrow.classList.remove("form__arrow--rotate"),
        fill.classList.add("hidden"),
        fillArrow.classList.remove("form__arrow--rotate"));
}
const form = document.querySelector(".form");
function handlerFormData(e) {
  const t = e.target.id,
    r = e.target.value;
  "fullname" === t
    ? (document.querySelector(".photo__card--name").innerHTML = r)
    : "job" === t
    ? (document.querySelector(".photo__card--frontend").innerHTML = r)
    : "telFill" === t
    ? (document.querySelector("#telLink").href = "tel:" + r)
    : "emailFill" === t
    ? (document.querySelector("#emailLink").href = "mailto:" + r)
    : "linkedinFill" === t
    ? (document.querySelector("#linkedinLink").href =
        "https://www.linkedin.com/in/:" + r)
    : "githubFill" === t &&
      (document.querySelector("#githubLink").href = "https://github.com/" + r),
    saveLocalStorage();
}
form.addEventListener("change", handlerFormData);
const photoPalette = document.querySelector(".js-photo"),
  palette1 = document.querySelector(".js-palette-1"),
  palette2 = document.querySelector(".js-palette-2"),
  palette3 = document.querySelector(".js-palette-3");
function changeColors(e) {
  "1" === e.currentTarget.value
    ? (photoPalette.classList.add("palette-1"),
      photoPalette.classList.remove("palette-2"),
      photoPalette.classList.remove("palette-3"))
    : "2" === e.currentTarget.value
    ? (photoPalette.classList.remove("palette-1"),
      photoPalette.classList.add("palette-2"),
      photoPalette.classList.remove("palette-3"))
    : "3" === e.currentTarget.value &&
      (photoPalette.classList.remove("palette-1"),
      photoPalette.classList.remove("palette-2"),
      photoPalette.classList.add("palette-3")),
    saveLocalStorage();
}
function handleGetImage(e) {
  console.log(e);
}
palette1.addEventListener("click", changeColors),
  palette2.addEventListener("click", changeColors),
  palette3.addEventListener("click", changeColors);
const fr = new FileReader(),
  getFile = document.querySelector(".js__input"),
  profileImage = document.querySelector(".photo__card--photo"),
  profilePreview = document.querySelector(".photo__square");
function handleGetImage(e) {
  const t = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage), fr.readAsDataURL(t);
}
function writeImage() {
  (profileImage.style.backgroundImage = `url(${fr.result})`),
    (profilePreview.style.backgroundImage = `url(${fr.result})`),
    saveLocalStorage();
}
getFile.addEventListener("change", handleGetImage);
let storageArray = {
  palette: "",
  fullname: "",
  job: "",
  emailFill: "",
  telFill: "",
  linkedinFill: "",
  githubFill: "",
  imgselector: "",
};
const formStorage = document.querySelector(".js-form");
function handlerFormStorage(e) {
  const t = e.target.id,
    r = e.target.value;
  (storageArray[t] = r), console.log(storageArray);
}
function saveLocalStorage() {
  localStorage.setItem("storageArray", JSON.stringify(storageArray));
}
function getLocalStorage() {
  const e = localStorage.getItem("storageArray");
  if (null !== e) {
    const t = JSON.parse(e);
    storageArray = t;
  }
}
form.addEventListener("change", handlerFormStorage), getLocalStorage();
const resetButton = document.querySelector(".photo__reset--container");
function handleReset() {
  location.reload();
}
resetButton.addEventListener("click", handleReset);
