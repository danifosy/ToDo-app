const addTaskForm = document.querySelector(".addTaskForm");
const taskFormInput = document.querySelector(".addTaskForm__textInput");

addTaskForm.onsubmit = function (event) {
  event.preventDefault();
  const taskFormRadio = document.querySelector(".addTaskForm__radio:checked");
  const newTask = { title: "", date: "", isDone: false };
  newTask.title = taskFormInput.value;
  newTask.date = taskFormRadio.value;

  console.log(newTask.title, newTask.date);
};
