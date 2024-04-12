import {deleteTask, deleteTasks} from "./deleteTasks.js";


function addProject(projectName){
  this.projectName = projectName;
  this.tasks = [];

}

function addTask(title, description, dueDate, priority){
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}
const addProjects = () => {
  const projects = [];
  
  const addButton = document.getElementById("add-button");
  addButton.addEventListener("click", () => {
    const projectName = document.getElementById("project-name-input").value;
    const project = new addProject(projectName);
    projects.push(project);

    const projectButton = document.createElement("button");
    projectButton.textContent = projectName;
    document.getElementById("projects").appendChild(projectButton);

    projectButton.addEventListener("click", () => {
      displayTasks(projectName)
    })

    document.getElementById("project-name-input").value = "";
  });

  const displayTasks = (projectName) => {
    const selectedProject = projects.find(project => project.projectName ===  projectName);
    const tasksForProject = selectedProject ? selectedProject.tasks : [];

    const tasksContainer = document.getElementById("tasks");
    tasksContainer.innerHTML = "";
    tasksForProject.forEach((task, index) => {
      const taskDiv = document.createElement("div");
      taskDiv.textContent = `Title: ${task.title}, Description: ${task.description}, Due Date: ${task.dueDate}, Priority: ${task.priority}`;
      tasksContainer.appendChild(taskDiv);

     
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteTask(selectedProject, index, displayTasks);
    if (taskDiv.parentNode === tasksContainer){
      tasksContainer.removeChild(taskDiv);
    }
  
    });
    taskDiv.appendChild(deleteButton);
    });

}
        
  

    

  const taskButton = document.getElementById("task-button");
  taskButton.addEventListener("click", () => {
    const title = document.getElementById("title-input").value;
    const description = document.getElementById("description-input").value;
    const dueDate = document.getElementById("due-date-input").value;
    const priority = document.getElementById("priority-input").value;
    const selectedProjectName = document.getElementById("selected-project").value;

    const selectedProject = projects.find(project => project.projectName === selectedProjectName)

  

    if (selectedProject){
    const task = new addTask(title, description, dueDate, priority);
    selectedProject.tasks.push(task);
    console.log(task);
    } else {
      console.error("selected project not found");
    }

  

    document.getElementById("title-input").value = "";

  

    document.getElementById("description-input").value = "";

    

    document.getElementById("due-date-input").value = "";



    document.getElementById("priority-input").value = "";

    displayTasks(selectedProjectName);

  });

  const newProject = new addProject("New Project");
  projects.push(newProject);
  console.log(projects);
}
export default addProjects;