import { blankProjectLoad } from "./blank-project-load";


export function displayDefaultProject() {
  const projectInfoDiv = document.createElement("div");
  projectInfoDiv.textContent = blankProjectLoad().projectTitle;
  contentDiv.appendChild(projectInfoDiv);
}

export function displayTheForm(){
  document.getElementById("add-todo-form").style.display = "";
}

export function addItemToCheckList(){
  const addItem = document.getElementById("add-to-checklist").value;

  if (addItem !== ""){
    const ul = document.querySelector(".todo-ul");
    const li = document.createElement("li");
    li.textContent = addItem;
    const span = document.createElement("span");
    span.className = "remove-checklist-item";
    const removeIcon = document.createTextNode("\u00D7");
    li.appendChild(span);
    span.appendChild(removeIcon);
    ul.appendChild(li);
    document.getElementById("add-to-checklist").value = "";

    if (document.querySelectorAll("li").length  >  0) {
      console.log("INSIDE MODULE IF...", document.querySelectorAll("li").length);
      const nodeListCheckList = document.querySelectorAll("li");
      console.log(nodeListCheckList);

      nodeListCheckList.forEach(checkListItem => {
        checkListItem.addEventListener("click", function removeItemFromChecklist() {
          checkListItem.remove();
        })
      })
    } 
    else return;
  }

}