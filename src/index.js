/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const list = document.getElementById('list');

const doList = [
  {
    id: 0,
    description: 'Go to the market',
    completed: false,
  },
  {
    id: 1,
    description: 'Clean your home',
    completed: false,
  },
  {
    id: 2,
    description: 'Programming',
    completed: false,
  },
];

doList.sort((a, b) => a.id - b.id);

const addToDo = (toDoList) => {
  for (let id = 0; id < toDoList.length; id += 1) {
    const item = `
    <li>
      
      <i class="fas fa-check elem-1" id="${doList[id].id}"></i>

      <p class="elem-2">${doList[id].description}</p>

      <i class="fas fa-trash elem-3" id="${doList[id].completed}"></i>

    </li>`;

    list.innerHTML += item;
  }
};

addToDo(doList);