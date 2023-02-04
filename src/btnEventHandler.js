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

// ---- Landing Page ----
// Modular approach to easy add more buttons
const addButtonFunctionalityToLandingPage = () => btnNewTaskClickShowPopUp();

const btnNewTaskClickShowPopUp = () => {
  const btnNewTask = document.querySelector("#btnNewTask");
  btnNewTask.addEventListener("click", createTaskPopUpWrite);
};

// ---- Pop Up Form ----
// Modular approach to easy add more buttons
const addEventListenersToPopUpForm = () => {
  addEventListenerToBtnSaveTaskPopUp();
  addEventListenerToBtnCancelTaskPopUp();
};

const addEventListenerToBtnSaveTaskPopUp = () => {
  const btn = document.querySelector("#popUpSaveBtn");
  btn.addEventListener("click", saveInputHidePopUpAndShowToDoList);
};

const saveInputHidePopUpAndShowToDoList = (e) => {
  e.preventDefault();
  processAndSaveInputValues();
  discardTaskPopUpWrite(e);
  displayToDoList();
};

const addEventListenerToBtnCancelTaskPopUp = () => {
  const btn = document.querySelector("#popUpCancelBtn");
  btn.addEventListener("click", cancelPopUp);
};

const cancelPopUp = (e) => {
  e.preventDefault();
  discardTaskPopUpWrite(e);
};

// ---- Buttons on ToDoList ----
// Modular approach to easy add more buttons
const addEventListenersToTaskButtons = () => {
  addEventListenerToAllCheckboxes();
  addEventListenerToAllUpdateButtons();
  addEventListenerToAllDeleteButtons();
};

const addEventListenerToAllCheckboxes = () => {
  const checkboxes = document.querySelectorAll(".taskCheckbox");
  for (const checkbox of checkboxes) {
    checkbox.addEventListener("click", toggleCheckedAttribute);
  }
};

const addEventListenerToAllUpdateButtons = () => {
  const updateButtons = document.querySelectorAll(".btnUpdate");
  for (const updateBtn of updateButtons) {
    updateBtn.addEventListener(
      "click",
      showPopUpBufferCurrentTaskAndDeleteItFromToDoListObject
    );
  }
};

const showPopUpBufferCurrentTaskAndDeleteItFromToDoListObject = (e) => {
  const oldTaskValues = showTaskPopUpWriteWithTaskValues(e);
  removeOldEventListenerFromCancelBtnPopUp();
  addNewEventListenerToCancelBtnPopUp();
  deleteTaskFromProject(e);
  if (projectHasNoTasksLeft(e)) deleteProjectFromToDoList(e);
};

const removeOldEventListenerFromCancelBtnPopUp = () => {
  const btnRemove = document.querySelector("#popUpCancelBtn");
  btnRemove.removeEventListener("click", cancelPopUp);
};

const addNewEventListenerToCancelBtnPopUp = () => {
  const btn = document.querySelector("#popUpCancelBtn");
  btn.addEventListener("click", fillInPopUpOldBufferedTaskValuesAndSaveThem);
};

const fillInPopUpOldBufferedTaskValuesAndSaveThem = (e) => {
  e.preventDefault();
  fillInOldTaskValues();
  processAndSaveInputValues();
  discardTaskPopUpWrite(e);
};

const addEventListenerToAllDeleteButtons = () => {
  const deleteButtons = document.querySelectorAll(".btnDelete");
  for (const deleteBtn of deleteButtons) {
    deleteBtn.addEventListener(
      "click",
      deleteTaskAndIfLastThenProjectAndDisplayToDoList
    );
  }
};

const deleteTaskAndIfLastThenProjectAndDisplayToDoList = (e) => {
  deleteTaskFromProject(e);
  if (projectHasNoTasksLeft(e)) deleteProjectFromToDoList(e);
  displayToDoList();
};

export {
  addButtonFunctionalityToLandingPage,
  addEventListenersToPopUpForm,
  addEventListenersToTaskButtons,
};
