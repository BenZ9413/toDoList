import { createTaskPopUpWrite } from "./popUp";
import { discardTaskPopUpWrite } from "./popUp";
import { showTaskPopUpWriteWithTaskValues } from "./popUp";
import { fillInOldTaskValues } from "./popUp";
import { processAndSaveInputValues } from "./toDoListManager";
import { deleteTaskFromProject } from "./toDoListManager";
import { deleteProjectFromToDoList } from "./toDoListManager";
import { projectHasNoTasksLeft } from "./toDoListManager";
import { toggleCheckedAttribute } from "./toDoListManager";
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
    processAndSaveInputValues();
    discardTaskPopUpWrite(e);
    displayToDoList();
  });
};

const btnCancelTaskPopUp = function () {
  const btn = document.querySelector("#popUpCancelBtn");
  btn.addEventListener("click", cancelPopUp);
};

const cancelPopUp = (e) => {
  e.preventDefault();
  discardTaskPopUpWrite(e);
};

const addEventListenerToCheckbox = () => {
  const checkboxes = document.querySelectorAll(".taskCheckbox");
  for (const checkbox of checkboxes) {
    checkbox.addEventListener("click", (e) => {
      toggleCheckedAttribute(e);
    });
  }
};

const addEventListenerToUpdateButton = () => {
  const updateButtons = document.querySelectorAll(".btnUpdate");
  for (const updateBtn of updateButtons) {
    updateBtn.addEventListener("click", (e) => {
      const oldTaskValues = showTaskPopUpWriteWithTaskValues(e);
      removeOldEventListenerFromCancelBtn();
      addNewEventListenerToCancelButtonPopUp(oldTaskValues);
      deleteTaskFromProject(e);
      if (projectHasNoTasksLeft(e)) deleteProjectFromToDoList(e);
    });
  }
};

const removeOldEventListenerFromCancelBtn = () => {
  const btnRemove = document.querySelector("#popUpCancelBtn");
  btnRemove.removeEventListener("click", cancelPopUp);
};

const addNewEventListenerToCancelButtonPopUp = (oldTaskValues) => {
  const btn = document.querySelector("#popUpCancelBtn");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    fillInOldTaskValues(oldTaskValues);
    processAndSaveInputValues();
    discardTaskPopUpWrite(e);
  });
};

const addEventListenerToDeleteButton = () => {
  const deleteButtons = document.querySelectorAll(".btnDelete");
  for (const deleteBtn of deleteButtons) {
    deleteBtn.addEventListener("click", (e) => {
      deleteTaskFromProject(e);
      if (projectHasNoTasksLeft(e)) deleteProjectFromToDoList(e);
      displayToDoList();
    });
  }
};

export {
  addButtonFunctionalityToLandingPage,
  addEventListenersToPopUpForm,
  addEventListenersToTaskButtons,
};
