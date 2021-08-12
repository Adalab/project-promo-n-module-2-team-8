'use strict';

const collapsable= document.querySelector('.js__collapsable');
const fieldset= document.querySelector('.js__fieldset');


function handleClick(){
  // eslint-disable-next-line no-console
  console.log(collapsable);
  fieldset.classList.toggle('hidden');
  collapsable.classList.toggle('form__arrow--rotate');
}
collapsable.addEventListener('click', handleClick);

