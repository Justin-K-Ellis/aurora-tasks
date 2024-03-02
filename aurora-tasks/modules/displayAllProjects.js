import makeListElement from "./listElements";
import removeAllChildNodes from "./remove_all_childen";

function displayAllProjects(projectList, DOMtaskList) {
    console.log(`${projectList} is ${typeof projectList}`);  // For debug
    removeAllChildNodes(DOMtaskList);
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