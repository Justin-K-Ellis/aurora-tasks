import displayList from "./modules/displayList";
import Library from "./modules/taskLibrary";
import Task from "./modules/taskItem";

let taskForm = document.querySelector(".task-form");
let DOMtaskList = document.querySelector(".task-list");
let taskLibrary = new Library;


function handleForm(event) {
  event.preventDefault();
  const formData = new FormData(taskForm);
  const title = formData.get("form-title");
  const description = formData.get("form-description");
  const date = formData.get("form-date");
  let taskObj = new Task(title, description, date);
  taskLibrary.addTask(taskObj);
  displayList(taskLibrary, taskLibrary.taskArray, DOMtaskList);
}


taskForm.addEventListener("submit", handleForm);
