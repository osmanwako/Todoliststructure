const showcheckbox = (event) => {
  const parent = event.target.parentElement;
  parent.classList.toggle('show-unchecked');
  parent.classList.toggle('show-checked');
};
export default showcheckbox;
