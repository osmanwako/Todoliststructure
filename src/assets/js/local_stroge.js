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
} from './dom-elements.js';

const lists = [
  {
    order: 1,
    task: 'Double tap to edit',
    status: 0,
  },
  {
    order: 2,
    task: 'Drag and drop to reorder your list',
    status: 0,
  },
  {
    order: 3,
    task: 'Manage all your lists in one place',
    status: 0,
  },
  {
    order: 4,
    task: 'Resync to clear out the old',
    status: 0,
  },
];

const createlist = () => {
  lists.forEach((list) => {
    const p = ptodo();
    p.textContent = list.task;
    if (list.status) {
      const div = divchecked();
      div.append(btnchecked(), btnunchecked(), p, btntrash(), btndarg());
      stack.insertBefore(div, btnclear);
    } else {
      const div = divunchecked();
      div.append(btnchecked(), btnunchecked(), p, btntrash(), btndarg());
      stack.insertBefore(div, btnclear);
    }
  });
};
export default createlist;
