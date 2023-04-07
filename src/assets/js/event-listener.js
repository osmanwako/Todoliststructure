import btncheckbox from './dom-elements.js';

const checkboxlist = (event) => {
  const parent = event.target.parentElement;
  parent.classList.toggle('show-unchecked');
  parent.classList.toggle('show-checked');
};

const getcheckbox = () => {
  btncheckbox.forEach((element) => {
    element.addEventListener('click', checkboxlist);
  });
};
export default getcheckbox;
