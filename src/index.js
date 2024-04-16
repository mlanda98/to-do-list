import projectInstance from "./projects";
import UIModule from "./ui";
import taskInstance from "./tasks"

projectInstance.addProject("Project A");
taskInstance.addTask("Task 1", "Description of task 1", "2024-04-15","High", "Project A");

const taskForm = document.getElementById("task-form");
taskForm.dispatchEvent(new Event("submit"));


document.addEventListener("taskSelected", function(event){
  const taskId = event.detail;
  taskInstance.deleteTask(taskId);
})