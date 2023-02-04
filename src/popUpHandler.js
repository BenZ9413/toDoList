import createTaskPopUp from "./popUpHTML";
import { addEventListenersToPopUpForm } from "./btnEventHandler";
import { extractFormValues } from "./toDoListManager";
import { formValues } from "./toDoListManager";

const showTaskPopUp = () => {
  createTaskPopUp();
  addEventListenersToPopUpForm();
  //document.querySelector(
  //  "#formDuedate"
  //).defaultValue = `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`;
};

const showTaskPopUpWithTaskValues = (e) => {
  showTaskPopUp();
  fillInTaskValues(e);
  return extractFormValues();
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
  document.querySelector("#formTask").value = `${formValues["task"]}`;
  document.querySelector("#formProject").value = `${formValues["project"]}`;
  document.querySelector("#formPriority").value = `${formValues["priority"]}`;
  document.querySelector("#formDuedate").value = `${formValues["duedate"]}`;
  document.querySelector(
    "#formDescription"
  ).value = `${formValues["description"]}`;
};

const discardTaskPopUp = (e) => {
  e.target.form.remove();
};

export {
  showTaskPopUp,
  showTaskPopUpWithTaskValues,
  discardTaskPopUp,
  fillInOldTaskValues,
};
