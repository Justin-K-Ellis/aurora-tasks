// TODO refactor prototype code as necessary

import displayList from "./modules/displayList";
import makeTodo from "./modules/todo_item";
import removeAllChildNodes from "./modules/remove_all_childen";
import { getTasks, strikeTasks } from "./modules/checkTask";

let todoForm = document.querySelector("#todo-form");
let todoList = document.querySelector(".todo-list");
let todoArr = [];

// It seems the event handler must be in main file
function handleForm(event) {
  event.preventDefault();
  const formData = new FormData(todoForm);
  const title = formData.get("title");
  const description = formData.get("description");
  const todoObj = makeTodo(title, description);
  todoArr.push(todoObj);
  removeAllChildNodes(todoList);
  displayList(todoArr, todoList);
  setTimeout(() => {
    const allTasks = getTasks(".todo-items");
    strikeTasks(allTasks);
  }, 10)
}


todoForm.addEventListener("submit", handleForm);
