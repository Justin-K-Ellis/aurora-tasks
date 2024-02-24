import makeListElement from "./listElements";
import removeAllChildNodes from "./remove_all_childen";

function displayList(taskLibrary, taskList, DOMtaskList) {
    removeAllChildNodes(DOMtaskList);
    for (let task of taskList) {
      const taskElement = makeListElement(task, taskLibrary, DOMtaskList);
      DOMtaskList.appendChild(taskElement);
    }
  }

export default displayList;