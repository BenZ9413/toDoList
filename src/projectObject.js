import Task from "./taskObject";

class Project {
  constructor() {}

  addTask = (taskName) => {
    this[`${taskName}`] = new Task();
  };
}

export default Project;
