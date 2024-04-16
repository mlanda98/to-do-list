let toDoArray = [];

export const createToDo = (Title, Description, DueDate, Priority, Checklist) => {
  console.log("Called createToDo module");
  console.log({Title, Description, DueDate, Priority, Checklist});;
  console.log("adding to the toDoArray");

  toDoArray.push ({Title, Description, DueDate, Priority, Checklist});
  console.log(toDoArray);
  return {Title, Description, DueDate, Priority, Checklist};
}