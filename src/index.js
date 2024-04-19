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

let currentTaskId;

document.addEventListener("DOMContentLoaded", function(){
  const modal = document.getElementById("editTaskModal");
  const cancelButton = document.getElementById("cancel-task-button");
  const closeButton = document.querySelector(".close");
  closeButton.addEventListener("click", function(){
    modal.style.display = "none";
  })

  document.getElementById("tasks").addEventListener("click", function(event){
    if (event.target.classList.contains("edit-button")){
      const taskId = event.target.dataset.taskId;
      const task = taskInstance.tasks.find(task => task.id === taskId);
      fillModalWithTaskDetails(task);
      modal.style.display = "block";
      currentTaskId = taskId;
    }
  })
  
  cancelButton.addEventListener("click", cancelModal);
  window.addEventListener("click", function(event){
    if (event.target === modal){
      cancelModal();
    }
   })
}); 

function fillModalWithTaskDetails(task){
  document.getElementById("edit-title-input").value = task.title;
  document.getElementById("edit-description-input").value = task.description;
  document.getElementById("edit-due-date-input").value = task.dueDate;
  document.getElementById("edit-priority-input").value = task.priority;
  document.getElementById("edit-selected-project").value = task.project;
}

function cancelModal(){
  const modal = document.getElementById("editTaskModal");
  modal.style.display = "none";
}

document.getElementById("save-task-button").addEventListener("click", function(event){
  const modal = document.getElementById("editTaskModal");
  modal.style.display = "none";

  const updatedTitle = document.getElementById("edit-title-input").value;
  const updatedDescription = document.getElementById("edit-description-input").value;
  const updatedDueDate = document.getElementById("edit-due-date-input").value;
  const updatedPriority = document.getElementById("edit-priority-input").value;
  const updatedProject = document.getElementById("edit-selected-project").value;

  const taskIndex = taskInstance.tasks.findIndex(task => task.id === currentTaskId);
  if (taskIndex !== -1){
    taskInstance.tasks[taskIndex].title = updatedTitle;
    taskInstance.tasks[taskIndex].description = updatedDescription;
    taskInstance.tasks[taskIndex].dueDate = updatedDueDate;
    taskInstance.tasks[taskIndex].priority = updatedPriority;
    taskInstance.tasks[taskIndex].project = updatedProject;
    
  }

  
  
  taskInstance.renderTasks(updatedProject);
})
      

  


 