import { btncheckbox } from './dom-elements.js';

export const checkboxlist = (event) => {
  const parent = event.target.parentElement;
  parent.classList.toggle('show-unchecked');
  parent.classList.toggle('show-checked');
};

export const getcheckbox = () => {
  btncheckbox.forEach((element) => {
    element.addEventListener('click', checkboxlist);
  });
};
