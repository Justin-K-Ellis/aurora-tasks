function displayList(arrOfObjects, listElement) {
    for (let todoObj of arrOfObjects) {
      let li = document.createElement("li");
      let title = document.createElement("p");
      let description = document.createElement("p");
  
      title.textContent = todoObj.title;
      description.textContent = todoObj.description;
  
      li.appendChild(title);
      li.appendChild(description);
      if (todoObj.checked = true) {
        li.classList.add("checked-item");
      }
  
      listElement.appendChild(li);
    }
  }

export default displayList;