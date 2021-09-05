'use strict';

const collapsable = document.querySelectorAll('.js__collapsable');
const design = document.querySelector('.js-design');
const fill = document.querySelector('.js-fill');
const share = document.querySelector('.js-share');

for (let i = 0; i < collapsable.length; i++) {
    collapsable[i].addEventListener('click', handleClick);
}

function handleClick(ev) {
    ev.currentTarget.classList.toggle('form__arrow--rotate');

    const fieldset = ev.currentTarget.parentNode.parentNode.querySelector('.js__fieldset');
    fieldset.classList.toggle('hidden');

    // if (!design.classList.content('hidden')) {
    //     else {
    //         fill.classList.add('hidden');
    //     }
    // }
}


    // si la clase hidden está en a y b no puede estar en c
    // if click en diseña, añade hidden a rellena y comparte
    //tiene que escuchar el click en el legend lo que esconde es el fieldset, por lo que al estar relacionados, podemos usar el parentNode, pero esta vez discriminado, no genérico

// si la clase hidden está en a y c no puede estar en b
// if click en rellena, añade hidden a diseña y comparte
// si la clase hidden está en c y b no puede estar en a
// if click en comparte, añade hidden a diseña y rellena;