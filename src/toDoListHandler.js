import masterToDoList from "./toDoListObject";
import { showUpdatedToDoList } from "./toDoListHTML";
import { deleteOldToDoList } from "./toDoListHTML";
import { formValues } from "./popUpHandler";
import { extractFormValues } from "./popUpHandler";
import { addEventListenersToTaskButtons } from "./btnEventHandler";

const displayToDoList = () => {
  deleteOldToDoList();
  showUpdatedToDoList();
  addEventListenersToTaskButtons();
};

const processAndSaveInputValues = () => {
  extractFormValues();
  if (projectExists()) {
    saveOrUpdateTask();
  } else {
    saveNewProjectAndTask();
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

// Code optimization: projectName not dynamic enough.
const deleteProjectFromToDoList = (e) => {
  const projectName = e.target.parentNode.parentNode.parentNode.id;
  masterToDoList.deleteProject(projectName);
};

// Code optimization: check against length not dynamic enough.
const projectHasNoTasksLeft = (e) => {
  const projectName = e.target.parentNode.parentNode.parentNode.id;
  if (Object.keys(masterToDoList[projectName]).length < 3) return true;
  return false;
};

const addNewTaskToProject = () => {
  masterToDoList[`${formValues["project"]}`]["addTask"](
    `${formValues["task"]}`
  );
};

// Code optimization: taskName und projectName not dynamic enough.
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

// Code optimization: taskName und projectName not dynamic enough.
const toggleCheckedAttribute = (e) => {
  const taskName = e.target.parentNode.childNodes[1].textContent;
  const projectName = e.target.parentNode.parentNode.parentNode.id;
  masterToDoList[projectName][taskName]["toggleChecked"]();
};

export {
  displayToDoList,
  processAndSaveInputValues,
  deleteTaskFromProject,
  deleteProjectFromToDoList,
  projectHasNoTasksLeft,
  toggleCheckedAttribute,
};
