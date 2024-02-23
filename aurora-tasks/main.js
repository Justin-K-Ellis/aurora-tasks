// TODO refactor prototype code as necessary

// import displayList from "./modules/displayList";
import makeListElement from "./modules/listElements";
import makeTaskLibrary from "./modules/taskLibrary";
import makeTodo from "./modules/todo_item";
import removeAllChildNodes from "./modules/remove_all_childen";
import { getTasks, strikeTasks } from "./modules/checkTask";

let taskForm = document.querySelector(".task-form");
let DOMtaskList = document.querySelector(".task-list");
let taskArr = new makeTaskLibrary();

// It seems the event handler must be in main file
function handleForm(event) {
  event.preventDefault();
  const formData = new FormData(taskForm);
  const title = formData.get("form-title");
  const description = formData.get("form-description");
  const date = formData.get("form-date");

  const taskObj = makeTodo(title, description, date);
  taskArr.taskArray.push(taskObj);
  removeAllChildNodes(DOMtaskList);
  displayList(taskArr.taskArray);
  // setTimeout(() => {
  //   const allTasks = getTasks(".todo-items");
  //   strikeTasks(allTasks);
  // }, 10)
}

function displayList(taskList) {
  for (let task of taskList) {
    const taskElement = new makeListElement(task.title, task.description, task.date);
    DOMtaskList.appendChild(taskElement);
  }
}


taskForm.addEventListener("submit", handleForm);
