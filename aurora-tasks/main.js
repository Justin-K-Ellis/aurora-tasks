import displayList from "./modules/displayList";
import makeListElement from "./modules/listElements";
import Library from "./modules/taskLibrary";
import makeTask from "./modules/taskItem";
import removeAllChildNodes from "./modules/remove_all_childen";
import { getTasks, strikeTasks } from "./modules/checkTask";

let taskForm = document.querySelector(".task-form");
let DOMtaskList = document.querySelector(".task-list");
let taskLibrary = new Library;


function handleForm(event) {
  event.preventDefault();
  const formData = new FormData(taskForm);
  const title = formData.get("form-title");
  const description = formData.get("form-description");
  const date = formData.get("form-date");
  const taskObj = makeTask(title, description, date);
  taskLibrary.addTask(taskObj);
  displayList(taskLibrary, taskLibrary.taskArray, DOMtaskList);
}


taskForm.addEventListener("submit", handleForm);
