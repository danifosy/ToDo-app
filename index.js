const menuButton = document.querySelector(".iconButtonMenu");

menuButton.onclick = sendAlert;
//menuButton.onclick = createTaskListItem;

function sendAlert() {
  alert("Hello World!");
}

const taskList = document.querySelector(".taskList");

const newTask = document.createElement("p");
newTask.innerText = "Example Task";

taskList.append(newTask);

const taskOne = createTaskListItem("Cook coffee");

taskList.append(taskOne);

//function createTaskListItem() {
//const taskListItem = document.createElement("label");
//taskListItem.className = "taskItem";

//const taskInputItem = document.createElement("input");
//taskInputItem.className = "taskItem__checkbox";
//taskInputItem.type = "checkbox";
//taskListItem.appendChild(taskInputItem);

//const taskSpanItem = document.createElement("span");
//taskSpanItem.className = "taskItem__labelText";

//taskSpanItem.innerText =
//  "Learn JS even though it's fucking hard and I hate math.";
//taskListItem.appendChild(taskSpanItem);

//taskList.append(taskListItem);
//return taskListItem;
//}

function createTaskListItem(taskName) {
  const taskListItem = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  taskListItem.className = "taskItem";

  input.className = "taskItem__checkbox";
  input.type = "checkbox";
  input.setAttribute("name", "tasks");

  span.className = "taskItem__labelText";
  span.innerText = taskName;

  taskListItem.append(input, span);

  return taskListItem;
}
