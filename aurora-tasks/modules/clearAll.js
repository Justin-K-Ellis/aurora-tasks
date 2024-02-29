function clearAll(arr) {
    for (let a of arr) {
        clearInput(a);
    }
}
  
function clearInput(field) {
    field.value = "";
}

export default clearAll;
