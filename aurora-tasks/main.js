import clearAll from "./modules/clearAll";
import displayList from "./modules/displayList";
import Library from "./modules/taskLibrary";
import Task from "./modules/taskItem";
import { l } from "vite/dist/node/types.d-jgA8ss1A";

let taskForm = document.querySelector(".task-form");
let DOMtaskList = document.querySelector(".task-list");
let workLibrary = new Library;
let shoppingLibrary = new Library;
let hobbieLibrary = new Library;

const workLink = document.querySelector("#work-link");
const shoppingLink =  document.querySelector("#shopping-link");
const hobbiesLink = document.querySelector("#hobbies-link");

let formTitle = document.querySelector("#form-title");
let formDescription = document.querySelector("#form-description");
let formDate = document.querySelector("#form-date");
const formInputs = [formTitle, formDescription, formDate];

function handleForm(event) {
  event.preventDefault();
  const formData = new FormData(taskForm);
  const title = formData.get("form-title");
  const description = formData.get("form-description");
  const projectList = formData.get("project-list");
  const date = formData.get("form-date");

  let taskObj = new Task(title, description, projectList, date);
  if (taskObj.projectList === "work") {
    workLibrary.addTask(taskObj);
  }
  else if (taskObj.projectList === "shopping") {
    shoppingLibrary.addTask(taskObj);
  }
  else if (taskObj.projectList === "hobbies") {
    hobbieLibrary.addTask(taskObj);
  }
  // taskLibrary.addTask(taskObj);
  // displayList(taskLibrary, taskLibrary.taskArray, DOMtaskList);
  displayAllProjects();
  clearAll(formInputs);
}

taskForm.addEventListener("submit", handleForm);

workLink.addEventListener("click", () => {
  displayProject(workLibrary);
})

shoppingLink.addEventListener("click", () => {
  displayProject(shoppingLibrary);
})

hobbiesLink.addEventListener("click", () => {
  displayProject(hobbieLibrary);
})

function displayProject(projectLibrary) {
  clearAll(formInputs);
  displayList(projectLibrary, projectLibrary.taskArray, DOMtaskList);
}

function displayAllProjects() {
  displayProject(workLibrary);
  displayProject(shoppingLibrary);
  displayProject(hobbieLibrary);
}