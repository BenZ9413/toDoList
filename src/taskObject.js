class Task {
  constructor() {
    this.priority = "";
    this.dueDate = "";
    this.description = "";
    this.checked = false;
  }

  updateTaskDetails = (newPriority, newDueDate, newDescription) => {
    this.priority = newPriority;
    this.dueDate = newDueDate;
    this.description = newDescription;
  };

  toggleChecked = () => {
    if (this.checked == false) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  };
}

export default Task;
