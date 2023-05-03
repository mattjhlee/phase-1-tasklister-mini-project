document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", formSubmit, false);

  function formSubmit(event) {
    event.preventDefault();
    //console.log(document.querySelector('#new-task-description').value);
    const newTask = document.querySelector('#new-task-description').value;
    const newLi = document.createElement("li");
    newLi.textContent = newTask;
    const workingList = document.querySelector("#tasks");
    workingList.appendChild(newLi);
  }
});
