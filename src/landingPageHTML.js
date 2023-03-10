const body = document.querySelector("body");

const createHeader = function () {
  const header = document.createElement("header");
  const pageTitle = document.createElement("div");
  pageTitle.setAttribute("id", "pageTitle");
  pageTitle.textContent = "Masterlist";
  header.appendChild(pageTitle);
  body.appendChild(header);
};

const createMain = function () {
  const main = document.createElement("main");
  const btnNewTask = document.createElement("button");
  btnNewTask.setAttribute("id", "btnNewTask");
  btnNewTask.textContent = "+";
  main.appendChild(btnNewTask);
  body.appendChild(main);
};

const createFooter = function () {
  const footer = document.createElement("footer");
  const copyright = document.createElement("div");
  copyright.setAttribute("id", "copyright");
  copyright.textContent = "created by BenZ9413";
  footer.appendChild(copyright);
  body.appendChild(footer);
};

export { createHeader, createMain, createFooter };
