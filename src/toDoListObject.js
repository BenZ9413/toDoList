import Project from "./projectObject";

class ToDoList {
  constructor() {}

  addProject = (projectName) => {
    this[`${projectName}`] = new Project();
  };

  deleteProject = (projectName) => {
    for (const project in this) {
      if (project == projectName) {
        delete this[project];
      }
    }
  };
}

const masterToDoList = new ToDoList();

export default masterToDoList;
