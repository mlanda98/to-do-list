import taskInstance from "./tasks";

const UIModule = (function(){
  const taskForm = document.getElementById("task-form");

  function submit(event){
    event.preventDefault();
    const title = document.getElementById("title-input").value;
    const description = document.getElementById("description-input").value;
    const dueDate = document.getElementById("due-date-input").value;
    const priority = document.getElementById("priority-input").value;
    const project = document.getElementById("selected-project").value;
   


    taskInstance.addTask(title, description, dueDate, priority, project);
    clearInputs();
  };

  function clearInputs(){
    document.getElementById("title-input").value = "";
    document.getElementById("description-input").value = "";
    document.getElementById("due-date-input").value = "";
    document.getElementById("priority-input").value = "";
    document.getElementById("selected-project").value = "";
  }

  document.addEventListener("DOMContentLoaded", function () {
    taskForm.addEventListener("submit", submit);
  });

  const taskContainer = document.getElementById("tasks");
  taskContainer.addEventListener("click", function(event){
    const clickedElement = event.target;
    if (clickedElement.classList.contains("delete-button")){
      const taskId = clickedElement.getAttribute("data-task-id");
      const taskSelectedEvent = new CustomEvent("taskSelected", {detail: taskId});
      document.dispatchEvent(taskSelectedEvent);
    };
  });
  

  return {
    submit: submit,
    clearInputs: clearInputs
  };


})();



export default UIModule;