import masterToDoList from "./toDoListObject";

const formValues = {};

const saveOrUpdateTask = (e) => {
  extractFormValues(e);
  saveProjectAndTaskIfProjectIsNew();
  // addProjectIfNew(form.elements["project"].value);
  // console.log(form.elements["formTask"].value);
  // alert("Saving or updating...");
  // console.log(e.target.form);
  // console.log(masterToDoList);
};

const extractFormValues = (e) => {
  const form = e.target.form;
  const listOfInputs = form.querySelectorAll("input");
  for (let i = 0; i < listOfInputs.length; i++) {
    formValues[`${listOfInputs[i].name}`] = listOfInputs[i].value;
  }
};

const saveProjectAndTaskIfProjectIsNew = () => {
  if (projectExists()) return;
  addProject();
  addTaskToProject();
  console.log(masterToDoList);
};

const projectExists = () => {
  for (const projects in masterToDoList.listOfProjects) {
    if (masterToDoList.listOfProjects[projects] == formValues["project"])
      return true;
  }
  return false;
};

const addProject = () => {
  masterToDoList.listOfProjects[`${formValues["project"]}`] = {};
};

const addTaskToProject = () => {
  masterToDoList.listOfProjects[`${formValues["project"]}`][
    `${formValues["task"]}`
  ] = {};
};

const removeProject = (projectName) => {
  console.log("removeProject");
};

const update = () => {
  console.log("updatingToDoList");
};

export { saveOrUpdateTask };
