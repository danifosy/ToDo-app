import { ReadLocalStorage, WriteLocalStorage } from "./utils/localStorage.js";

// creates array with objects
/* const tasks = [
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
]; */

// selects the tasklist
const taskList = document.querySelector(".taskList");

const tasks = ReadLocalStorage("task", []);

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
// save radio button in var
const today = document.getElementById("today");
const tomorrow = document.getElementById("tomorrow");
const thisWeek = document.getElementById("thisWeek");

// if button is clicked, run function called dateFilter;
today.onclick = dateFilter;
tomorrow.onclick = dateFilter;
thisWeek.onclick = dateFilter;

// event = mouse click
function dateFilter(event) {
  // gets input from click, in this case the Id
  const dateFilterId = event.target.id;

  // calls function with LS tasks and event.target.id filter (this is a weird description, come up with sth better after caffeine intake)
  const filteredTasks = filterTasksByDate(tasks, dateFilterId);

  // creates a new array. array of task objects -> array of task elements
  const filteredTaskItems = filteredTasks.map((task) =>
    createTaskListItem(task)
  );

  // replaces all shown items with filtered items
  taskList.replaceChildren(...filteredTaskItems);
}

// filters provided array by date type. (see below)
function filterTasksByDate(taskArray, dateType) {
  return taskArray.filter((task) => task.date === dateType);
}

// this is basic math lmao what the heck

// add(1,2)

// const a = 34
// const b = 33

// add(a, b)
// add(a, 1)
// add(b, a)

// function add(x, y) {
//   return x + y;
// }
