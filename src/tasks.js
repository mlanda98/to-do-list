import ProjectModule from "./projects";

function saveTasksToLocalStorage(){
  try {
  localStorage.setItem("tasks", JSON.stringify(taskInstance.tasks));
  } catch (error){
    console.error("error saving tasks to localStorage:", error)
  }
}
export function loadTasksFromLocalStorage(){
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (storedTasks){
    taskInstance.tasks = storedTasks;
  }
  saveTasksToLocalStorage();
};

function taskModule(){
  this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
}

taskModule.prototype.addTask = function(title, description, dueDate, priority, project){
  const task = {
    id: this.generatedId(),
    title, 
    description,
    dueDate,
    priority, 
    project
  }

  this.tasks.push(task);
  this.renderTasks(project);
  saveTasksToLocalStorage();
}

taskModule.prototype.deleteTask = function(taskId){
  this.tasks = this.tasks.filter(task => task.id !== taskId);
  this.renderTasks();
  saveTasksToLocalStorage();

}

taskModule.prototype.renderTasks = function(projectName){
  const taskContainer = document.getElementById("tasks");
  taskContainer.innerHTML = "";

  this.tasks.forEach(task => {
    if (task.project === projectName){
      const taskElement = document.createElement("div");
      taskElement.classList.add("task-item");

      let priorityClass = "";
      if (task.priority === "Low"){
        priorityClass = "priority-low"
      } else if (task.priority === "Medium"){
        priorityClass = "priority-medium"
      } else {
        priorityClass = "priority-high"
      }

      taskElement.classList.add(priorityClass);
      taskElement.innerHTML = `
      <h3>${task.title}</h3>
      <p>Description: ${task.description}</p>
      <p>Due Date: ${task.dueDate}</p>
      <p>Priority: ${task.priority}</p>
      <p>Project: ${task.project}</p>
      <button class="edit-button" data-task-id="${task.id}">Edit</button>
      <button class="delete-button" data-task-id="${task.id}">Delete</button>`;
      taskContainer.appendChild(taskElement);
      }
  })
}

taskModule.prototype.generatedId = function(){
  const timeStamp = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 10000);
  const id = `${timeStamp} - ${randomNumber}`;
  return id;
}

const taskInstance = new taskModule();


  
 
export default taskInstance;
export {saveTasksToLocalStorage} ;
