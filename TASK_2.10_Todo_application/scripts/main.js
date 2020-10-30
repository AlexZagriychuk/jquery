$(function () {
  initJQueryButtonListeners();
});

function initJQueryButtonListeners() {
  $("#createNewTask").click(function () {
    var newTaskDescriptionElem = $("#newTaskDescription"),
      newTaskText = $(newTaskDescriptionElem).val().trim();

    if (newTaskText === "") {
      displayEmptyTaskNameError();
    } else {
      clearNewTaskError();
      addTaskIntoToTheBeDoneList(newTaskText);
      $(newTaskDescriptionElem).val('');
    }
  });

  $(".completed-btn").click(moveTaskIntoTheCompletedTasksList);

  function addTaskIntoToTheBeDoneList(taskText) {
    var taskElem = $("#tasksToBeDoneList").append(generateNewTaskHTML(taskText));
    $(taskElem).find(".completed-btn").click(moveTaskIntoTheCompletedTasksList);
  }

  function generateNewTaskHTML(taskText) {
    return (
      `<li class="task">
      <span class="task__description">${taskText}</span>
      <button class="task__btn completed-btn">Completed</button>
      <button class="task__btn delete-btn">Delete</button>
      </li>`
    );
  }

  function displayEmptyTaskNameError() {
    var errorId = "newTaskError",
      errorHtml = `<span class="new-task__error-text" id="${errorId}">New task text should not be empty.</span>`,
      newTask = $(".new-task");

    if ($(newTask).find("#" + errorId).length === 0) {
      newTask.append(errorHtml);
    }
  }

  function clearNewTaskError() {
    $(".new-task").find("#newTaskError").remove();
  }

  function moveTaskIntoTheCompletedTasksList() {
    var parentTaskElem = $(this).parent(".task");

    $(parentTaskElem).detach().appendTo('#completedTasksList');
    $(this).hide();
  }
}
