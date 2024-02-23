// Factory function to make todo items

const makeTodo = (title, description, date) => {
    let done = false;
    return { title, description, date, done};
}

export default makeTodo;