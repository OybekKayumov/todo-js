export default class StorageManager {
  static save = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
}