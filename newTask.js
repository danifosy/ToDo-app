import { ReadLocalStorage, WriteLocalStorage } from "./utils/localStorage.js";

const addTaskForm = document.querySelector(".addTaskForm");
const taskFormInput = document.querySelector(".addTaskForm__textInput");

addTaskForm.onsubmit = function (event) {
  event.preventDefault();
  const taskFormRadio = document.querySelector(".addTaskForm__radio:checked");
  const newTask = { title: "", date: "", isDone: false };
  newTask.title = taskFormInput.value;
  newTask.date = taskFormRadio.value;

  const tasks = ReadLocalStorage("task", []);

  tasks.push(newTask);

  // creates key and item in LS
  WriteLocalStorage("task", tasks);
  location.href = "index.html";
};
