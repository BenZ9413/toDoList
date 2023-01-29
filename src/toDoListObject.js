import Project from "./projectObject";

class ToDoList {
  constructor() {}

  addProject = (projectName) => {
    this[`${projectName}`] = new Project();
  };
}

const masterToDoList = new ToDoList();

export default masterToDoList;
