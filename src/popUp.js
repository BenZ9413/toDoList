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

const createTaskPopUp = function () {
  const body = document.querySelector("body");
  const popUpForm = document.createElement("form");
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
  body.appendChild(popUpForm);

  //document.querySelector(
  //  "#formDuedate"
  //).defaultValue = `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`;
};

const showTaskPopUp = function () {
  alert("Task PopUp");
};

const hideTaskPopUp = function () {
  alert("Hide");
};

export { createTaskPopUp, showTaskPopUp, hideTaskPopUp };
