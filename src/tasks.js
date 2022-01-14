import Task from './task';
import StorageManager from './storage';
import StatusManager from './status.js';

export default class TasksManager {
  constructor() {
    this.tasks = [];
  }

  getTasks = () => this.tasks.sort((a, b) => a.index - b.index);

  getTask = (index) => this.tasks[index - 1];

  addTask = (description, completed = false) => {
    const newTask = new Task(this.tasks.length + 1, description, completed);
    this.tasks.push(newTask);
    StorageManager.save(this.tasks);
    return newTask;
  };

  deleteTask = (index) => {
    const newTasks = [];
    const taskIndex = index - 1;

    this.tasks.forEach((t, i) => {
      if (i < taskIndex) {
        newTasks.push(t);
      } else if (i > taskIndex) {
        t.index = i;
        newTasks.push(t);
      }
    });
    this.tasks = newTasks;
    StorageManager.save(this.tasks);
  };

  updateTask = (index, description, completed) => {
    this.tasks[index - 1].description = description;
    this.tasks[index - 1].completed = completed;
    StorageManager.save(this.tasks);

    return this.tasks[index - 1];
  };

  updateStatus = (index, status) => {
    StatusManager.updateStatus(this.getTask(index), status);
    StorageManager.save(this.tasks);
    return this.getTask(index);
  };

  clearCompleted = () => {
    this.tasks = this.tasks.filter((t) => t.completed === false);
    this.tasks.forEach((task, index) => {
      task.index = index + 1;
    });
    StorageManager.save(this.tasks);
    return this.tasks;
  };
}