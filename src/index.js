import './style.css';

import TasksManager from './tasks';
import DisplayManager from './display';

const selector = (element) => document.querySelector(element);
const selectorAll = (element) => document.querySelectorAll(element);
const input = selector('input');
const manager = new TasksManager();

const updateTask = (event, index, focus = false) => {
  if (event.key === 'Enter' || focus) {
    manager.updateTask(
      index,
      selector(`.task_${index}`).value,
      selector(`.task_${index}_checkbox`).checked,
    );
    selector('.add_task input').focus();
  }
};

const deleteTask = (index) => {
  manager.deleteTask(index);
  DisplayManager.reset(selector('.tasks'));
  manager
    .getTasks()
    .forEach((task) => DisplayManager.displayTask(selector('.tasks'), task));
  selectorAll('.fa-trash').forEach((e) => e.addEventListener('click', () => {
    deleteTask(e.dataset.id);
  }));

  selectorAll('.input_task').forEach((e) => e.addEventListener('keyup', (event) => {
    updateTask(event, e.dataset.id);
  }));

  selectorAll('.input_task').forEach((e) => e.addEventListener('focusout', (event) => {
    updateTask(event, e.dataset.id, true);
  }));
};

const createTask = () => {
  const task = manager.addTask(input.value);
  DisplayManager.displayTask(selector('.tasks'), task);
  input.value = '';

  selector(`#task_${task.index}`).addEventListener('click', () => {
    deleteTask(task.index);
  });

  selector(`#input_task_${task.index}`).addEventListener('keyup', (event) => {
    updateTask(event, task.index);
  });

  selector(`#input_task_${task.index}`).addEventListener(
    'focusout',
    (event) => {
      updateTask(event, task.index, true);
    },
  );

  selector(`#input_task_${task.index}`).focus();
};

input.addEventListener('keyup', ({ key }) => {
  if (key === 'Enter') {
    createTask();
  }
});

selector('.fa-level-down-alt').addEventListener('click', () => createTask());

// const listData = [
//   {
//     description: 'Clean Home',
//     completed: false,
//     index: 0,
//   },
//   {
//     description: 'Market',
//     completed: false,
//     index: 1,
//   },
//   {
//     description: 'Programming',
//     completed: false,
//     index: 2,
//   },
// ];

// let listMark = `
//   <div class="row title">
//     <p>Today's To Do</p>
//     <i class="fas fa-sync"></i>
//   </div>
//   <div class="row">
//     <input class="add-input" type="text" placeholder="Add to your list">
//     <i class="fas fa-level-down-alt rotate"></i>
//   </div>
// `;

// listData.forEach((listItem) => {
//   listMark += `
//       <div class="row">
//         <input type="checkbox">
//         <p>${listItem.description}</p>
//         <i class="fas fa-ellipsis-v"></i>
//       </div>
//   `;
// });

// listMark += `
//     <div class="row clear">
//       <p>Clear All Completed</p>
//     </div>
// `;

// const listElement = document.querySelector('.list');
// listElement.innerHTML = listMark;