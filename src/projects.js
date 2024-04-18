function ProjectModule(){
  this.projects = [];
  this.nextProjectId = 1;
}

ProjectModule.prototype.addProject = function(projectName){
  const projectId = "project-" + this.nextProjectId++;
  this.projects.push({id: projectId, name: projectName});
  this.renderProjects();
};


ProjectModule.prototype.renderProjects = function(){
  const projectsContainer = document.getElementById("projects");
  projectsContainer.innerHTML = "";

  this.projects.forEach(project => {
    const projectElement = document.createElement("button");
    projectElement.classList.add("project-button");
    projectElement.id = project.id;
    projectElement.textContent = project.name;
    projectsContainer.appendChild(projectElement);
  });
};



export default ProjectModule;