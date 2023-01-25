import { addEventListenersToPopUpForm } from "./btnEventHandler";

const formInputs = {
  attributes: ["type", "id", "placeholder"],
  attributeKeys: ["types", "ids", "placeholders"],
  types: ["text", "text", "select", "date", "textarea"],
  ids: [
    "formTask",
    "formProject",
    "formPriority",
    "formDuedate",
    "formDescription",
  ],
  placeholders: [
    "Enter task name",
    "Project",
    "normal",
    "Current Date",
    "Enter task description",
  ],
};

const createTaskPopUpWrite = function () {
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

const showTaskPopUpWrite = function () {
  alert("Task PopUp");
};

const discardTaskPopUpWrite = function (event) {
  event.preventDefault();
  console.log(event);
  alert("Hide");
};

export { createTaskPopUpWrite, showTaskPopUpWrite, discardTaskPopUpWrite };
