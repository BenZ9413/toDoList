import masterToDoList from "./toDoListObject";

const main = document.querySelector("main");

const displayToDoList = () => {
  deleteOldToDoList();
  showUpdatedToDoList();
};

const deleteOldToDoList = () => {
  document.getElementById("#toDoList").remove();
};

const showUpdatedToDoList = () => {
  const toDoListContainer = document.createElement("div");
  toDoListContainer.setAttribute("id", "toDoList");
  for (const projects in masterToDoList) {
    if (projects !== "addProject") {
      const projectContainer = document.createElement("div");
      projectContainer.setAttribute("id", `${projects}`);
      const projectHeader = document.createElement("div");
      projectHeader.setAttribute("class", "projectHeader");
      projectHeader.textContent = `${projects}`;
      const projectContent = document.createElement("div");
      projectContent.setAttribute("class", "projectContent");
      for (const tasks in masterToDoList[projects]) {
        if (tasks !== "addTask") {
          const taskContainer = document.createElement("div");
          taskContainer.setAttribute("class", "taskContainer");
          const taskCheckbox = document.createElement("checkbox");
          taskCheckbox.setAttribute("class", "taskCheckbox");
          const taskName = document.createElement("div");
          taskName.setAttribute("class", "taskName");
          taskName.textContent = `${tasks}`;
          const taskPriority = document.createElement("div");
          taskPriority.setAttribute("class", "taskPriority");
          taskPriority.textContent = `${tasks["priority"]}`;
          const taskDueDate = document.createElement("div");
          taskDueDate.setAttribute("class", "taskDueDate");
          taskDueDate.textContent = `${tasks["dueDate"]}`;
          const btnUpdate = document.createElement("button");
          btnUpdate.setAttribute("class", "btnUpdate");
          btnUpdate.textContent = "upd";
          const btnDelete = document.createElement("button");
          btnDelete.setAttribute("class", "btnDelete");
          btnDelete.textContent = "del";
          const taskDescription = document.createElement("div");
          taskDescription.setAttribute("class", "taskDescription");
          taskDescription.textContent = `${tasks["description"]}`.slice(0, 5);

          taskContainer.appendChild(taskCheckbox);
          taskContainer.appendChild(taskName);
          taskContainer.appendChild(taskPriority);
          taskContainer.appendChild(taskDueDate);
          taskContainer.appendChild(btnUpdate);
          taskContainer.appendChild(btnDelete);
          taskContainer.appendChild(taskDescription);

          projectContent.appendChild(taskContainer);
        }
      }
      projectContainer.appendChild(projectHeader);
      projectContainer.appendChild(projectContent);
      toDoListContainer.appendChild(projectContainer);
    }
  }
  main.appendChild(toDoListContainer);
};

export default displayToDoList;
