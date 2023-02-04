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

const createTaskPopUp = () => {
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
};

const createPopUpSaveButton = () => {
  const saveButton = document.createElement("button");
  saveButton.setAttribute("id", "popUpSaveBtn");
  saveButton.setAttribute("type", "submit");
  saveButton.textContent = "Save";
  return saveButton;
};

const createPopUpCancelButton = () => {
  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("id", "popUpCancelBtn");
  cancelButton.textContent = "X";
  return cancelButton;
};

export default createTaskPopUp;
