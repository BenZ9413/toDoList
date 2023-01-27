class ToDoList {
  constructor() {
    this.listOfProjects = {};
  }

  addProject = (projectName) => {
    const projectExists = checkIfProjectAlreadyExists(this, projectName);
    if (!projectExists) this.listOfProjects.projectName = projectName;
    console.log(projectExists);
  };

  addTaskToProject = () => {};

  removeProject = (projectName) => {
    console.log("removeProject");
  };

  update = () => {
    console.log("updatingToDoList");
  };
}

const checkIfProjectAlreadyExists = (toDoListObj, projectName) => {
  for (const projects in toDoListObj.listOfProjects) {
    if (toDoListObj.listOfProjects[projects] == projectName) return true;
  }
  return false;
};

export default ToDoList;
