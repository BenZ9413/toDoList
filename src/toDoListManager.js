import masterToDoList from "./toDoListObject";

const formValues = {};

const saveOrUpdateTask = (e) => {
  extractFormValues(e);
  if (projectExists()) {
    alert("project exists already");
    //updateProjectAndTask();
  } else {
    saveProjectAndTask();
  }
};

const extractFormValues = (e) => {
  const form = e.target.form;
  const listOfInputs = form.querySelectorAll("input");
  for (let i = 0; i < listOfInputs.length; i++) {
    formValues[`${listOfInputs[i].name}`] = listOfInputs[i].value;
  }
};

const saveProjectAndTask = () => {
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

const addNewProject = () => {
  masterToDoList.addProject(`${formValues["project"]}`);
};

const addNewTaskToProject = () => {
  masterToDoList[`${formValues["project"]}`]["addTask"](
    `${formValues["task"]}`
  );
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

export { saveOrUpdateTask };
