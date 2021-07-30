import { ReadLocalStorage, WriteLocalStorage } from "./utils/localStorage.js";

const addTaskForm = document.querySelector(".addTaskForm");
const taskFormInput = document.querySelector(".addTaskForm__textInput");

addTaskForm.onsubmit = function (event) {
  event.preventDefault();
  const taskFormRadio = document.querySelector(".addTaskForm__radio:checked");
  const newTask = { title: "", date: "", isDone: false };
  newTask.title = taskFormInput.value;
  newTask.date = taskFormRadio.value;

  // code only runs if the Enter Task is not empty
  if (newTask.title !== "") {
    const oldTasks = ReadLocalStorage("task", []);

    oldTasks.push(newTask);

    // creates key and item in LS
    WriteLocalStorage("task", oldTasks);
    location.href = "index.html";
  }
};
