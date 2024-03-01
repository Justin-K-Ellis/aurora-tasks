import makeListElement from "./listElements";

function displayAllProjects(projectList, DOMtaskList) {
    console.log(typeof projectList);  // For debug
    for (let taskLibrary of projectList) {
        displayListFull(taskLibrary, taskLibrary.taskArray, DOMtaskList);
    }
}

function displayListFull(taskLibrary, taskList, DOMtaskList) {
    for (let task of taskList) {
      const taskElement = makeListElement(task, taskLibrary, DOMtaskList);
      DOMtaskList.appendChild(taskElement);
    }
  }

export default displayAllProjects;