const addTaskForm = document.querySelector(".addTaskForm");
const taskFormInput = document.querySelector(".addTaskForm__textInput");

addTaskForm.onsubmit = function (event) {
  event.preventDefault();
  const taskFormRadio = document.querySelector(".addTaskForm__radio:checked");
  const taskFormValue = taskFormInput.value;
  const taskFormDate = taskFormRadio.value;
  console.log(taskFormValue, taskFormDate);
};
