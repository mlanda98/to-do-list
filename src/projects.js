function projectModule(){
  this.projects = [];

}

projectModule.prototype.addProject = function(project){
  this.projects.push(project);
  this.renderProjects();
};


projectModule.prototype.renderProjects = function(){
  const projectsContainer = document.getElementById("projects");
  projectsContainer.innerHTML = "";

  this.projects.forEach(project => {
    const projectElement = document.createElement("div");
    projectElement.textContent = project;
    projectsContainer.appendChild(projectElement);
  });
};

const projectInstance = new projectModule();

export default projectInstance;