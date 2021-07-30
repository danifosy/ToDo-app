import { ReadLocalStorage, WriteLocalStorage } from "./utils/localStorage.js";

// creates array with objects
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

// selects the tasklist
const taskList = document.querySelector(".taskList");

// creates variable in which the result of the function is saved
// .map creates new array
const taskItem = tasks.map((task) => createTaskListItem(task));

// shows the function in browser
taskList.append(...taskItem);

// function that creates the label
function createTaskListItem(task) {
  // creates new html elements and saves them in variable
  const taskListItem = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  //sets the label class
  taskListItem.className = "taskItem";

  //sets attribute and type to the input
  input.className = "taskItem__checkbox";
  input.type = "checkbox";
  input.checked = task.isDone;
  input.setAttribute("name", "tasks");

  // sets class and text according to is in the array
  span.className = "taskItem__labelText";
  span.innerText = task.title;

  // puts the input and span inside the label
  taskListItem.append(input, span);

  // returns the result
  return taskListItem;
}
