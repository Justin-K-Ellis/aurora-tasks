// Class to create an object ("library") to store tasks to 
// be rendered to the DOM.

class Library {
    taskArray = [];

    addTask = (task) => {
        this.taskArray.push(task);
    }

    deleteTask = (index) => {
        this.taskArray.splice(index, 1);
    }
}

export default Library;