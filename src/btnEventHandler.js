import { createTaskPopUpWrite } from "./popUp";
import { discardTaskPopUpWrite } from "./popUp";
import { processAndSaveInputValues } from "./toDoListManager";
import displayToDoList from "./toDoListHTML";

const addButtonFunctionalityToLandingPage = function () {
  btnNewTaskClick();
};

const addEventListenersToTaskButtons = () => {
  addEventListenerToCheckbox();
  addEventListenerToUpdateButton();
  addEventListenerToDeleteButton();
};

const btnNewTaskClick = function () {
  const btnNewTask = document.querySelector("#btnNewTask");
  btnNewTask.addEventListener("click", createTaskPopUpWrite);
};

const addEventListenersToPopUpForm = function () {
  btnSaveTaskPopUp();
  btnCancelTaskPopUp();
};

const btnSaveTaskPopUp = function () {
  const btn = document.querySelector("#popUpSaveBtn");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    processAndSaveInputValues(e);
    discardTaskPopUpWrite(e);
    displayToDoList();
  });
};

const btnCancelTaskPopUp = function () {
  const btn = document.querySelector("#popUpCancelBtn");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    discardTaskPopUpWrite(e);
  });
};

const addEventListenerToCheckbox = () => {
  const checkboxes = document.querySelectorAll(".taskCheckbox");
  for (const checkbox of checkboxes) {
    checkbox.addEventListener("click", () => {
      alert("checked");
    });
  }
};

const addEventListenerToUpdateButton = () => {
  const updateButtons = document.querySelectorAll(".btnUpdate");
  for (const updateBtn of updateButtons) {
    updateBtn.addEventListener("click", () => {
      alert("update");
    });
  }
};

const addEventListenerToDeleteButton = () => {
  const deleteButtons = document.querySelectorAll(".btnDelete");
  for (const deleteBtn of deleteButtons) {
    deleteBtn.addEventListener("click", () => {
      alert("delete");
    });
  }
};

export {
  addButtonFunctionalityToLandingPage,
  addEventListenersToPopUpForm,
  addEventListenersToTaskButtons,
};
