function makeListElement(title, description, date) {
    let li = document.createElement("li");
    let taskTitle = document.createElement("div");
    let taskDescription = document.createElement("div");
    let taskDate = document.createElement("div");
    let deleteButton = document.createElement("button");

    taskTitle.classList.add("task-title");
    taskDescription.classList.add("task-description");
    taskDate.classList.add("task-date");

    taskTitle.textContent = title;
    taskDescription.textContent = description;
    taskDate.textContent = date;
    deleteButton.textContent = "Delete";


    li.appendChild(taskTitle);
    li.appendChild(taskDescription);
    li.appendChild(taskDate);
    li.appendChild(deleteButton);

    return li;
}

export default makeListElement;