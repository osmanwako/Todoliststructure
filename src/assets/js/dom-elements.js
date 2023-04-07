export const btnclear = document.getElementById('cleartodolist');
export const stack = document.getElementById('todolistid');

export const divunchecked = () => {
  const div = document.createElement('div');
  div.className = 'row show-unchecked';
  return div;
};

export const divchecked = () => {
  const div = document.createElement('div');
  div.className = 'row show-checked';
  return div;
};

export const btnchecked = () => {
  const btn = document.createElement('button');
  btn.className = 'row-button button-checked btn-checkbox';
  btn.innerHTML = '&#10004;';
  return btn;
};

export const btnunchecked = () => {
  const btn = document.createElement('button');
  btn.className = 'row-button button-unchecked btn-checkbox';
  btn.innerHTML = '&#9744;';
  return btn;
};

export const ptodo = () => {
  const par = document.createElement('p');
  par.className = 'row-par par-todo';
  par.contenteditable = 'true';
  return par;
};

export const btntrash = () => {
  const btn = document.createElement('button');
  btn.className = 'row-button button-trash';
  btn.innerHTML = '<span class="material-icons">&#xe872;</span>';
  return btn;
};

export const btndarg = () => {
  const btn = document.createElement('button');
  btn.className = 'row-button button-drag';
  btn.innerHTML = '<span class="material-icons">&#8942;</span>';
  return btn;
};
