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
