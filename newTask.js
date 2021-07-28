const { formatDiagnostic } = require("typescript");

const addTaskForm = document.querySelector(".addTaskForm");
const taskFormInput = document.querySelector(".addTaskForm__textInput");
const taskFormRadio = document.querySelector(
  ".addTaskForm__radio:checked + .addTaskForm__radioLabel"
);
const taskFormSubmit = document.querySelector(".addTaskForm__submit");

form.onsubmit = function (event) {
  event.preventDefault();
};
