import masterToDoList from "./toDoListObject";

const formValues = {};

const processAndSaveInputValues = (e) => {
  extractFormValues(e);
  if (projectExists()) {
    saveOrUpdateTask();
  } else {
    saveNewProjectAndTask();
  }
};

const deleteTaskAndShowUpdatedToDoList = (e) => {
  deleteTaskFromProject(e);
};

const extractFormValues = (e) => {
  const form = e.target.form;
  const listOfInputs = form.querySelectorAll("input");
  for (let i = 0; i < listOfInputs.length; i++) {
    formValues[`${listOfInputs[i].name}`] = listOfInputs[i].value;
  }
};

const saveOrUpdateTask = () => {
  if (!taskExists()) addNewTaskToProject();
  updateTaskDetails();
};

const saveNewProjectAndTask = () => {
  addNewProject();
  addNewTaskToProject();
  updateTaskDetails();
};

const projectExists = () => {
  for (const projects in masterToDoList) {
    if (projects == formValues["project"]) return true;
  }
  return false;
};

const taskExists = () => {
  for (const tasks in masterToDoList[`${formValues["project"]}`]) {
    if (tasks == formValues["task"]) return true;
  }
  return false;
};

const addNewProject = () => {
  masterToDoList.addProject(`${formValues["project"]}`);
};

const addNewTaskToProject = () => {
  masterToDoList[`${formValues["project"]}`]["addTask"](
    `${formValues["task"]}`
  );
};

const deleteTaskFromProject = (e) => {
  const taskName = e.target.parentNode.childNodes[1].textContent;
  const projectName = e.target.parentNode.parentNode.parentNode.id;
  masterToDoList[projectName]["deleteTask"](taskName);
};

const updateTaskDetails = () => {
  masterToDoList[`${formValues["project"]}`][`${formValues["task"]}`][
    "updateTaskDetails"
  ](
    `${formValues["priority"]}`,
    `${formValues["duedate"]}`,
    `${formValues["description"]}`
  );
};

const removeProject = (projectName) => {
  console.log("removeProject");
};

const update = () => {
  console.log("updatingToDoList");
};

export { processAndSaveInputValues, deleteTaskFromProject };
