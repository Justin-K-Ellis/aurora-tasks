// Factory function to make todo items

const makeTask = (title, description, date) => {
    let done = false;
    return { title, description, date, done};
}

export default makeTask;