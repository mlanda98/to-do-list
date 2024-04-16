function taskModule(){
  this.tasks = [];
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
  this.renderTasks();
}

taskModule.prototype.deleteTask = function(taskId){
  this.task = this.tasks.filter(task => task.id !== taskId);
  this.renderTasks();

}

taskModule.prototype.renderTasks = function(){
  const taskContainer = document.getElementById("tasks");
  taskContainer.innerHTML = "";

  this.tasks.forEach(task => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task-item");
    taskElement.innerHTML = `
    <h3>${task.title}</h3>
    <p>Description: ${task.description}</p>
    <p>Due Date: ${task.dueDate}</p>
    <p>Priority: ${task.priority}</p>
    <p>Project: ${task.project}</p>
    <button class="delete-button" data-task-id="${task.id}">Delete</button>`;
    taskContainer.appendChild(taskElement);
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