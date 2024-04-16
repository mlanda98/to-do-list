import projectInstance from "./projects";
import taskInstance from "./tasks"

projectInstance.addProject("Project A");
taskInstance.addTask("Task 1", "Description of task 1", "2024-04-15","High", "Project A");

console.log(projectInstance);
console.log(taskInstance);