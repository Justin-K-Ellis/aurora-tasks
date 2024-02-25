// Class to make task items

class Task {
    constructor(title, description, date) {
        this.title = title;
        this.description = description;
        this.date = date;
    }

    done = false;

    toggleDoneStatus() {
        this.done === false ? this.done = true : this.done = false;
    }
}

export default Task;