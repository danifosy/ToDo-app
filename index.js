const tasks = [
  {
    title: "Play Zelda until dawn. Or maybe don't...",
    date: "tomorrow",
    isDone: true,
  },
  {
    title: "Build new desk",
    date: "today",
    isDone: false,
  },
  {
    title: "Go to gym in the morning",
    date: "tomorrow",
    isDone: false,
  },
];

const taskList = document.querySelector(".taskList");

const taskItem = tasks.map((task) => createTaskListItem(task));

taskList.append(...taskItem);

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
