import displayList from "./displayList";

function makeListElement(task, taskLibrary, DOMtaskList) {
    // Create elements
    let li = document.createElement("li");
    let taskTitle = document.createElement("div");
    let taskDescription = document.createElement("div");
    let dateAndDelete = document.createElement("div");
    let taskDate = document.createElement("div");
    let deleteButton = document.createElement("button");
    const hr = document.createElement("hr");

    const index = taskLibrary.taskArray.indexOf(task);

    // Add classes
    taskTitle.classList.add("task-title");
    taskDescription.classList.add("task-description");
    taskDate.classList.add("task-date");
    deleteButton.classList.add("delete-btn");
    dateAndDelete.classList.add("date-and-delete");

    // Add content
    taskTitle.textContent = task.title;
    taskDescription.textContent = task.description;
    taskDate.textContent = task.date;
    deleteButton.textContent = "🗑️";
    deleteButton.addEventListener("click", () => {
        console.log(`Library has ${taskLibrary.taskArray.length} item(s).`);
        console.log(`Delete ${task.title}.`)
        taskLibrary.deleteTask(index);
        console.log(`Library has ${taskLibrary.taskArray.length} item(s).`);
        displayList(taskLibrary, taskLibrary.taskArray, DOMtaskList);
    })
   
    // Append
    li.appendChild(taskTitle);
    li.appendChild(taskDescription);
    dateAndDelete.appendChild(taskDate);
    dateAndDelete.appendChild(deleteButton);
    li.appendChild(dateAndDelete);
    li.appendChild(hr);
    li.setAttribute("data-index", index);

    // Check/done status logic
    li.addEventListener("click", () => {
        task.toggleDoneStatus();
        if (task.done === true) {
            li.classList.add("done-task");
        }
        else {
            li.classList.remove("done-task");
        }
    })
    
    task.done === true ? li.classList.add("done-task") : li.classList.remove("done-task");
    
    return li;
}

export default makeListElement;