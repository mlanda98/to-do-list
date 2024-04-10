import addTask from "./addTasks";


function addProject(projectName){
  this.projectName = projectName;
  this.properties = [];

}
const addProjects = () => {
  const projectButton = document.getElementById("add-button");
  projectButton.addEventListener("click", () => {
    const projectName = document.getElementById("project-name-input").value;
    const project = new addProject(projectName);
    console.log(project);
  })

  const taskButton = document.getElementById("task-button");
  taskButton.addEventListener("click", () => {
    const title = document.getElementById("title-input").value;
    const description = document.getElementById("description-input").value;
    const dueDate = document.getElementById("due-date-input").value;
    const priority = document.getElementById("priority-input").value;
    const task = new addTask(title, description, dueDate, priority);
    console.log(task);
  });

  const project1 = new addProject("Project 1");
  project1.properties.push(new addTask("Title1", "description", "dueDate", "priority"));

  const newProject = new addProject("New Project");
  newProject.properties.push(new addTask("title", "description", "dueDate", "priority"));

  const projects = [project1, newProject]
  console.log(projects);
}
export default addProjects;