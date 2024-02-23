// Factory functiom to create an object ("library") to store tasks to 
// be rendered to the DOM.

function makeTaskLibrary() {
    let taskArray = [];

    // TODO: method to delete tasks
    const deleteTask = () => {
        console.log("todo");
    }

    return { taskArray, deleteTask }
}

export default makeTaskLibrary;