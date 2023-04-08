import {
  btnclear,
  stack,
  btnchecked,
  btnunchecked,
  ptodo,
  btndarg,
  btntrash,
  divunchecked,
  divchecked,
  input,
  entericon,
} from './dom-elements.js';

const istoredlist = () => localStorage.getItem('storedtodo');
const storelists = (lists) => {
  lists = lists.map((list, i) => ({ ...list, order: i }));
  localStorage.setItem('storedtodo', JSON.stringify(lists));
};

const addtostorage = (value) => {
  const id = `tdl${Date.now()}`;
  const list = {
    order: 0,
    task: value,
    status: 0,
    id,
  };
  let lists = [];
  if (istoredlist()) {
    lists = JSON.parse(istoredlist());
    list.order = lists.length;
  }
  lists = [...lists, list];
  storelists(lists);
  return id;
};
const removelist = (id) => {
  if (istoredlist()) {
    let lists = JSON.parse(istoredlist());
    lists = lists.filter((list) => list.id !== id);
    storelists(lists);
  }
};

const listenremove = (event) => {
  const parent = event.srcElement.parentElement;
  parent.remove();
  removelist(parent.id);
};

const updatelist = (id, value) => {
  if (value === '') {
    removelist(id);
    document.getElementById(id).remove();
    return;
  }
  if (istoredlist()) {
    const lists = JSON.parse(istoredlist());
    lists.map((list) => {
      if (list.id === id) {
        list.task = value;
      }
      return list;
    });
    storelists(lists);
  }
};

const parblur = (event) => {
  const value = event.target.textContent ?? '';
  const { id } = event.target.parentElement;
  updatelist(id, value);
};
const parkeyevent = (event) => {
  const value = event.target.textContent ?? '';
  const parent = event.target.parentElement;
  const { id } = parent;
  if (event.key === 'Enter') {
    input.value = '';
    input.focus();
    updatelist(id, value);
  }
  if (value === '' && event.key === 'Backspace') {
    input.value = '';
    input.focus();
    parent.remove();
    removelist(id);
  }
};
const addlist = () => {
  const value = input.value ?? '';
  if (value) {
    const p = ptodo();
    p.textContent = value;
    p.addEventListener('keydown', parkeyevent);
    p.addEventListener('blur', parkeyevent);
    const trash = btntrash();
    trash.addEventListener('click', listenremove);
    const id = addtostorage(value);
    const div = divunchecked();
    div.id = id;
    div.append(btnchecked(), btnunchecked(), p, trash, btndarg());
    stack.insertBefore(div, btnclear);
  }
  input.value = '';
  input.focus();
};

const getenterkey = () => {
  addlist();
};

const getkeycode = (event) => {
  if (event.key === 'Enter') {
    addlist();
  }
};

const createlist = () => {
  const lists = JSON.parse(istoredlist());
  lists.forEach((list) => {
    const p = ptodo();
    p.addEventListener('keydown', parkeyevent);
    p.addEventListener('blur', parblur);
    p.textContent = list.task;
    const trash = btntrash();
    trash.addEventListener('mousedown', listenremove);
    if (list.status) {
      const div = divchecked();
      div.id = list.id;
      div.append(btnchecked(), btnunchecked(), p, trash, btndarg());
      stack.insertBefore(div, btnclear);
    } else {
      const div = divunchecked();
      div.id = list.id;
      div.append(btnchecked(), btnunchecked(), p, trash, btndarg());
      stack.insertBefore(div, btnclear);
    }
  });
};

export const listeninput = () => {
  input.addEventListener('keydown', getkeycode);
  entericon.addEventListener('click', getenterkey);
};

export const getlists = () => {
  if (istoredlist()) {
    createlist();
  }
};