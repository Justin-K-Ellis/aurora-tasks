import displayList from "./displayList";

function makeListElement(task, taskLibrary, DOMtaskList) {
    // Create elements
    let li = document.createElement("li");
    let taskWrapper = document.createElement("div");
    let p = document.createElement("p");
    let checkCircle = document.createElement("i");
    let taskContent = document.createElement("div");
    let taskTitle = document.createElement("div");
    let taskDescription = document.createElement("div");
    let dateAndDelete = document.createElement("div");
    let taskDate = document.createElement("div");
    let deleteButton = document.createElement("button");
    const hr = document.createElement("hr");

    const index = taskLibrary.taskArray.indexOf(task);

    // Add classes
    taskWrapper.classList.add("task-wrapper");
    checkCircle.classList.add("bi");
    checkCircle.classList.add("bi-circle");
    taskContent.classList.add("task-content");
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
    p.appendChild(checkCircle);
    taskWrapper.appendChild(p);
    taskContent.appendChild(taskTitle)
    taskContent.appendChild(taskDescription);
    dateAndDelete.appendChild(taskDate);
    dateAndDelete.appendChild(deleteButton);
    taskContent.appendChild(dateAndDelete);
    taskWrapper.appendChild(taskContent);
    li.appendChild(taskWrapper);
    li.appendChild(hr);
    li.setAttribute("data-index", index);

    // Check/done status logic
    li.addEventListener("click", () => {
        task.toggleDoneStatus();
        if (task.done === true) {
            li.classList.add("done-task");
            p.innerHTML = '<i class="bi bi-check2-circle"></i>';

        }
        else {
            li.classList.remove("done-task");
            p.innerHTML = '<i class="bi bi-circle"></i>';
        }
    })
    
    if (task.done) {
        li.classList.add("done-task");
        p.innerHTML = '<i class="bi bi-check2-circle"></i>';
    }
    else {
        li.classList.remove("done-task");
        p.innerHTML = '<i class="bi bi-circle"></i>';
    }

    // task.done === true ? li.classList.add("done-task") : li.classList.remove("done-task");
    
    return li;
}

export default makeListElement;