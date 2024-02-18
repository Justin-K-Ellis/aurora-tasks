// Factory function to make todo items

// TODO: add remaining parameters

const makeTodo = (title, description) => {
    let checked = false;
    return { title, description, checked};
}

export default makeTodo;