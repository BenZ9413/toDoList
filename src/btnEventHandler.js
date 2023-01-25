import { showTaskPopUp } from "./popUp";

const addButtonFunctionalityToLandingPage = function () {
  btnNewTaskClick();
};

const btnNewTaskClick = function () {
  const btnNewTask = document.querySelector("#btnNewTask");
  btnNewTask.addEventListener("click", showTaskPopUp);
};

const addEventListenersToPopUpForm = function () {
  btnSaveTaskPopUp();
  btnCancelTaskPopUp();
};

const btnSaveTaskPopUp = function () {
  const btn = document.querySelector("#popUpSaveBtn");
  btn.addEventListener("click", () => {
    alert("saving...");
  });
};

const btnCancelTaskPopUp = function () {
  const btn = document.querySelector("#popUpCancelBtn");
  btn.addEventListener("click", () => {
    alert("cancel");
  });
};

export { addButtonFunctionalityToLandingPage, addEventListenersToPopUpForm };
