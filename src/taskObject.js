class Task {
  constructor() {
    this.priority = "";
    this.dueDate = "";
    this.description = "";
  }

  updateTaskDetails = (newPriority, newDueDate, newDescription) => {
    this.priority = newPriority;
    this.dueDate = newDueDate;
    this.description = newDescription;
  };
}

export default Task;
