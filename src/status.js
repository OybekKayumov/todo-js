export default class StatusManager {
  static updateStatus = (task, status) => {
    task.completed = status;
  };
}