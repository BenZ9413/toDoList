import { createTaskPopUpWrite } from "./popUp";
import { discardTaskPopUpWrite } from "./popUp";
import { saveOrUpdateTask } from "./toDoListManager";

const addButtonFunctionalityToLandingPage = function () {
  btnNewTaskClick();
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
    saveOrUpdateTask(e);
    discardTaskPopUpWrite(e);
  });
};

const btnCancelTaskPopUp = function () {
  const btn = document.querySelector("#popUpCancelBtn");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    discardTaskPopUpWrite(e);
  });
};

export { addButtonFunctionalityToLandingPage, addEventListenersToPopUpForm };
