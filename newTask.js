const addTaskForm = document.querySelector(".addTaskForm");
const taskFormInput = document.querySelector(".addTaskForm__textInput");
const taskFormRadio = document.querySelector(".addTaskForm__radio:checked");

addTaskForm.onsubmit = function (event) {
  event.preventDefault();
  const taskFormValue = taskFormInput.value;
  const taskFormDate = taskFormRadio.value;
  console.log(taskFormValue, taskFormDate);
};
