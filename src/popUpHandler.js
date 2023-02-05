import createTaskPopUp from "./popUpHTML";
import { addEventListenersToPopUpForm } from "./btnEventHandler";

const formValues = {};
const oldTaskValues = {};

const showTaskPopUp = () => {
  createTaskPopUp();
  addEventListenersToPopUpForm();
  //document.querySelector(
  //  "#formDuedate"
  //).defaultValue = `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`;
};

const extractFormValues = (e) => {
  const form = document.querySelector("form");
  const listOfInputs = form.querySelectorAll("input");
  if (e.target.className == "btnUpdate") {
    for (let i = 0; i < listOfInputs.length; i++) {
      oldTaskValues[`${listOfInputs[i].name}`] = listOfInputs[i].value;
    }
  } else {
    for (let i = 0; i < listOfInputs.length; i++) {
      formValues[`${listOfInputs[i].name}`] = listOfInputs[i].value;
    }
  }
  console.log(formValues);
  console.log(oldTaskValues);
};

const showTaskPopUpWithTaskValues = (e) => {
  showTaskPopUp();
  fillInTaskValues(e);
  extractFormValues(e);
};

//Code optimization: Not dynamic enough
const fillInTaskValues = (e) => {
  const taskName = e.target.parentNode.childNodes[1].textContent;
  const projectName = e.target.parentNode.parentNode.parentNode.id;
  const priority =
    e.target.parentNode.querySelector(".taskPriority").textContent;
  const dueDate = e.target.parentNode.querySelector(".taskDueDate").textContent;
  const description =
    e.target.parentNode.querySelector(".taskDescription").textContent;
  document.querySelector("#formTask").value = taskName;
  document.querySelector("#formProject").value = projectName;
  document.querySelector("#formPriority").value = priority;
  document.querySelector("#formDuedate").value = dueDate;
  document.querySelector("#formDescription").value = description.slice(0, 50);
};

const fillInOldTaskValues = () => {
  document.querySelector("#formTask").value = `${oldTaskValues["task"]}`;
  document.querySelector("#formProject").value = `${oldTaskValues["project"]}`;
  document.querySelector(
    "#formPriority"
  ).value = `${oldTaskValues["priority"]}`;
  document.querySelector("#formDuedate").value = `${oldTaskValues["duedate"]}`;
  document.querySelector(
    "#formDescription"
  ).value = `${oldTaskValues["description"]}`;
};

const discardTaskPopUp = (e) => {
  e.target.form.remove();
};

export {
  showTaskPopUp,
  showTaskPopUpWithTaskValues,
  fillInOldTaskValues,
  discardTaskPopUp,
  formValues,
  extractFormValues,
};
