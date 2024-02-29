import clearAll from "./modules/clearAll";
import displayList from "./modules/displayList";
import Library from "./modules/taskLibrary";
import Task from "./modules/taskItem";

let taskForm = document.querySelector(".task-form");
let DOMtaskList = document.querySelector(".task-list");
let taskLibrary = new Library;

let formTitle = document.querySelector("#form-title");
let formDescription = document.querySelector("#form-description");
let formDate = document.querySelector("#form-date");
const formInputs = [formTitle, formDescription, formDate];

function handleForm(event) {
  event.preventDefault();
  const formData = new FormData(taskForm);
  const title = formData.get("form-title");
  const description = formData.get("form-description");
  const date = formData.get("form-date");

  let taskObj = new Task(title, description, date);
  taskLibrary.addTask(taskObj);
  displayList(taskLibrary, taskLibrary.taskArray, DOMtaskList);
  clearAll(formInputs);
}

taskForm.addEventListener("submit", handleForm);

