import masterToDoList from "./toDoListObject";

const saveOrUpdateTask = (e) => {
  alert("Saving or updating...");
  console.log(e.target.form);
};

const addProject = (projectName) => {
  const projectExists = checkIfProjectAlreadyExists(projectName);
  if (!projectExists) masterToDoList.listOfProjects.projectName = projectName;
};

const checkIfProjectAlreadyExists = (projectName) => {
  for (const projects in masterToDoList.listOfProjects) {
    if (masterToDoList.listOfProjects[projects] == projectName) return true;
  }
  return false;
};

const addTaskToProject = () => {};

const removeProject = (projectName) => {
  console.log("removeProject");
};

const update = () => {
  console.log("updatingToDoList");
};

export { saveOrUpdateTask };
