// Class to make task items

class Task {
    constructor(title, description, projectList, date) {
        this.title = title;
        this.description = description;
        this.projectList = projectList;
        this.date = date;
    }

    done = false;

    toggleDoneStatus() {
        this.done === false ? this.done = true : this.done = false;
    }
}

export default Task;