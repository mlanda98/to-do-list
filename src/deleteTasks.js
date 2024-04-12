const deleteTask = (project, taskIndex, displayTasks) => {
  project.tasks.splice(taskIndex, 1);
  displayTasks(project.projectName);
}

function deleteTasks(selectedProject, index, taskDiv, taskContainer, displayTasks){
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
  deleteTask(selectedProject, index, displayTasks);
  taskContainer.removeChild(taskDiv);
  
});

taskDiv.appendChild(deleteButton);


}

export {deleteTask, deleteTasks};