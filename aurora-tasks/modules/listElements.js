function makeListElement(title, description, date, done) {
    let li = document.createElement("li");
    let taskTitle = document.createElement("div");
    let taskDescription = document.createElement("div");
    let taskDate = document.createElement("div");

    taskTitle.classList.add("task-title");
    taskDescription.classList.add("task-description");
    taskDate.classList.add("task-date");

    taskTitle.textContent = title;
    taskDescription.textContent = description;
    taskDate.textContent = date;

    li.appendChild(taskTitle);
    li.appendChild(taskDescription);
    li.appendChild(taskDate);

    return li;
}

export default makeListElement;