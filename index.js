const menuButton = document.querySelector(".iconButtonMenu");

menuButton.onclick = sendAlert;

function sendAlert() {
  alert("Hello World!");
}

const newTaskObj = {
  title: "Play Zelda until dawn. Or maybe don't...",
  date: "tomorrow",
  isDone: true,
};

const taskList = document.querySelector(".taskList");

const taskOne = createTaskListItem(newTaskObj);

taskList.append(taskOne);

function createTaskListItem(task) {
  const taskListItem = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  taskListItem.className = "taskItem";

  input.className = "taskItem__checkbox";
  input.type = "checkbox";
  input.checked = task.isDone;
  input.setAttribute("name", "tasks");

  span.className = "taskItem__labelText";
  span.innerText = task.title;

  taskListItem.append(input, span);

  return taskListItem;
}
