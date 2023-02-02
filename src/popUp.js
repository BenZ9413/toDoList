import { addEventListenersToPopUpForm } from "./btnEventHandler";

const formInputs = {
  attributes: ["type", "id", "name", "placeholder"],
  attributeKeys: ["types", "ids", "names", "placeholders"],
  types: ["text", "text", "select", "date", "textarea"],
  ids: [
    "formTask",
    "formProject",
    "formPriority",
    "formDuedate",
    "formDescription",
  ],
  names: ["task", "project", "priority", "duedate", "description"],
  placeholders: [
    "Enter task name",
    "Project",
    "normal",
    "Current Date",
    "Enter task description",
  ],
};

const createTaskPopUpWrite = function () {
  if (document.querySelector("#taskPopUp")) return;

  const body = document.querySelector("body");
  const popUpForm = document.createElement("form");
  popUpForm.setAttribute("id", "taskPopUp");
  for (let i = 0; i < formInputs.ids.length; i++) {
    const newInputField = document.createElement("input");
    for (let j = 0; j < formInputs.attributes.length; j++) {
      newInputField.setAttribute(
        `${formInputs.attributes[j]}`,
        `${formInputs[formInputs.attributeKeys[j]][i]}`
      );
    }
    popUpForm.appendChild(newInputField);
  }
  popUpForm.appendChild(createPopUpSaveButton());
  popUpForm.appendChild(createPopUpCancelButton());
  body.appendChild(popUpForm);

  addEventListenersToPopUpForm();

  //document.querySelector(
  //  "#formDuedate"
  //).defaultValue = `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`;
};

const createPopUpSaveButton = function () {
  const saveButton = document.createElement("button");
  saveButton.setAttribute("id", "popUpSaveBtn");
  saveButton.setAttribute("type", "submit");
  saveButton.textContent = "Save";
  return saveButton;
};

const createPopUpCancelButton = function () {
  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("id", "popUpCancelBtn");
  cancelButton.textContent = "X";
  return cancelButton;
};

const showTaskPopUpWriteWithTaskValues = (e) => {
  createTaskPopUpWrite();
  fillInTaskValues(e);
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

const discardTaskPopUpWrite = function (event) {
  event.target.form.remove();
};

export {
  createTaskPopUpWrite,
  showTaskPopUpWriteWithTaskValues,
  discardTaskPopUpWrite,
};
