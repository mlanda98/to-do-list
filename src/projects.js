function ProjectModule(){
  this.projects = [];

}

ProjectModule.prototype.addProject = function(project){
  this.projects.push(project);
  this.renderProjects();
};


ProjectModule.prototype.renderProjects = function(){
  const projectsContainer = document.getElementById("projects");
  projectsContainer.innerHTML = "";

  this.projects.forEach(project => {
    const projectElement = document.createElement("button");
    projectElement.textContent = project;
    projectsContainer.appendChild(projectElement);
  });
};



export default ProjectModule;