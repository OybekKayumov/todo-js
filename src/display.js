export default class DisplayManager {
  static reset = (element) => {
    element.innerHTML = '';
  };

  static displayTask = (parent, task) => {
    const taskDiv = DisplayManager.createHtml(parent, 'div', 'task');
    taskDiv.dataset.id = task.index;

    const taskInput = DisplayManager.createHtml(taskDiv, 'div', 'task_input');

    const input = DisplayManager.createHtml(taskInput, 'input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', `task_${task.index}_checkbox checkbox_task`);
    input.id = `checkbox_task_${task.index}`;
    input.checked = task.completed;
    input.dataset.id = task.index;

    const input2 = DisplayManager.createHtml(taskInput, 'input');
    input2.setAttribute('type', 'text');
    input2.setAttribute('class', `task_${task.index} input_task`);
    input2.dataset.id = task.index;
    input2.value = task.description;
    input2.id = `input_task_${task.index}`;

    const i = DisplayManager.createHtml(taskDiv, 'i', 'fas fa-ellipsis-v');
    i.setAttribute('class', 'fas fa-trash');
    i.id = `task_${task.index}`;
    i.dataset.id = task.index;
  };

  static createHtml = (parent, tag, className, content = null) => {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = content;
    parent.appendChild(element);
    return element;
  };
}