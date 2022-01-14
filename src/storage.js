export default class StorageManager {
  static save = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  static load = () => (localStorage.getItem('tasks') != null
    ? JSON.parse(localStorage.getItem('tasks'))
    : []);
}