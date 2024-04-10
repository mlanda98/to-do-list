import addTask from "./addTasks";


function addProject(projectName){
  this.projectName = projectName;
  this.properties = [];

}

const addProjects = () => {
  const projects = [];
  
  const projectButton = document.getElementById("add-button");
  projectButton.addEventListener("click", () => {
    const projectName = document.getElementById("project-name-input").value;
    const project = new addProject(projectName);
    projects.push(project);
    console.log(project);

    const projectDiv = document.createElement("div");
    projectDiv.textContent = projectName;
    document.getElementById("projects").appendChild(projectDiv);

    document.getElementById("project-name-input").value = "";
  });

  const taskButton = document.getElementById("task-button");
  taskButton.addEventListener("click", () => {
    const title = document.getElementById("title-input").value;
    const description = document.getElementById("description-input").value;
    const dueDate = document.getElementById("due-date-input").value;
    const priority = document.getElementById("priority-input").value;
    
    const selectedProjectName = document.getElementById("selected-project").value;

    console.log(selectedProjectName);
    console.log(projects);

    const selectedProject = projects.find(project => project.projectName === selectedProjectName)

    console.log(selectedProject);

    if (selectedProject){
    const task = new addTask(title, description, dueDate, priority, selectedProject);
    selectedProject.properties.push(task);
    console.log(task);
    } else {
      console.error("selected project not found");
    }

    const titleDiv = document.createElement("div");
    titleDiv.textContent = title;
    document.getElementById("tasks").appendChild(titleDiv);

    document.getElementById("title-input").value = "";

    const descriptionDiv = document.createElement("div");
    descriptionDiv.textContent = description;
    document.getElementById("tasks").appendChild(descriptionDiv);

    document.getElementById("description-input").value = "";

    const dueDateDiv = document.createElement("div");
    dueDateDiv.textContent = dueDate;
    document.getElementById("tasks").appendChild(dueDateDiv);

    document.getElementById("due-date-input").value = "";

    const priorityDiv = document.createElement("div");
    priorityDiv.textContent = priority;
    document.getElementById("tasks").appendChild(priorityDiv);

    document.getElementById("priority-input").value = "";

  });

  const newProject = new addProject("New Project");
  projects.push(newProject);

  console.log(projects);
}
export default addProjects;