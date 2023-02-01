import Task from "./taskObject";

class Project {
  constructor() {}

  addTask = (taskName) => {
    this[`${taskName}`] = new Task();
  };

  deleteTask = (taskName) => {
    for (const task in this) {
      if (task == taskName) {
        delete this[task];
      }
    }
  };
}

export default Project;
