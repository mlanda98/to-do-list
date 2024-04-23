function ProjectModule(){
  this.projects = [] = JSON.parse(localStorage.getItem("projects")) || [];
  this.nextProjectId = 1;
}

ProjectModule.prototype.saveProjectsToLocalStorage = function(){
  try{
    localStorage.setItem("projects", JSON.stringify(this.projects));
  } catch (error){
    console.error("error saving projects to local storage:", error);
  }
};

ProjectModule.prototype.loadProjectsFromLocalStorage = function(){
  try {
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    if (storedProjects){
      this.projects = storedProjects;
      this.renderProjects();
    }
  } catch (error){
    console.error("error loading projects from local storage:", error);
  }
};

ProjectModule.prototype.addProject = function(projectName){
  const projectId = "project-" + this.nextProjectId++;
  this.projects.push({id: projectId, name: projectName});
  this.saveProjectsToLocalStorage();
  this.renderProjects();
};


ProjectModule.prototype.renderProjects = function(){
  const projectsContainer = document.getElementById("projects");
  projectsContainer.innerHTML = "";

  this.projects.forEach(project => {
    const projectsDiv = document.createElement("div");
    projectsDiv.classList.add("project-item");
    const projectElement = document.createElement("button");
    projectElement.classList.add("project-button");
    projectElement.id = project.id;
    projectElement.textContent = project.name;
    
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-project-button");
    deleteButton.textContent = "Delete";
    deleteButton.dataset.projectId = project.id;

    projectsDiv.appendChild(projectElement);
    projectsDiv.appendChild(deleteButton);
    projectsContainer.appendChild(projectsDiv);
  });
};



export default  ProjectModule ;