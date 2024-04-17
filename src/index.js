import ProjectModule from "./projects";
import UIModule from "./ui";
import taskInstance from "./tasks"

taskInstance.addTask("Task 1", "Description of task 1", "2024-04-15","High", "Project A");

const taskForm = document.getElementById("task-form");
taskForm.dispatchEvent(new Event("submit"));



document.addEventListener("taskSelected", function(event){
  const taskId = event.detail;
  taskInstance.deleteTask(taskId);
})

document.addEventListener("DOMContentLoaded", function(){
  const projectInstance = new ProjectModule();
  function handleFormSubmit(event){
    event.preventDefault();
    const projectNameInput = document.getElementById("project-name-input");
    const projectName = projectNameInput.value;
    projectInstance.addProject(projectName);
    projectNameInput.value = "";
  }

  const projectForm = document.getElementById("projects-form");
  projectForm.addEventListener("submit", handleFormSubmit);

  projectInstance.addProject("Project A");
})