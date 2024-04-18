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
 
  function renderTasksForProject(projectName){
    taskInstance.renderTasks(projectName);
  }
  projectInstance.projects.forEach(project => {
    renderTasksForProject(project.name);
  })

  document.addEventListener("click", function(event){
    if (event.target.classList.contains("project-button")){
      const projectId = event.target.id;
      const project = projectInstance.projects.find(p => p.id === projectId);
      taskInstance.renderTasks(project.name);
    }
      
  });

  function handleFormSubmit(event){
    event.preventDefault();
    const projectNameInput = document.getElementById("project-name-input");
    const projectName = projectNameInput.value.trim();
    projectInstance.addProject(projectName);
    renderTasksForProject(projectName);
    projectNameInput.value = "";

    
  }

  const projectForm = document.getElementById("projects-form");
  projectForm.addEventListener("submit", handleFormSubmit);



  const defaultProjectName = "Project A";
  projectInstance.addProject(defaultProjectName);
  renderTasksForProject(defaultProjectName);
})
