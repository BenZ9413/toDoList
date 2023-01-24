import { showTaskPopUp } from "./popUp";

const addButtonFunctionalityToLandingPage = function () {
  btnNewTaskClick();
};

const btnNewTaskClick = function () {
  const btnNewTask = document.querySelector("#btnNewTask");
  btnNewTask.addEventListener("click", showTaskPopUp);
};

export default addButtonFunctionalityToLandingPage;
