$(function () {
  initJQueryCreateNewTask();
  initJQueryCompletedTasksListDroppable();
});


function initJQueryCreateNewTask() {
  $("#createNewTask").click(function () {
    var $newTaskDescription = $("#newTaskDescription"),
      newTaskText = $newTaskDescription.val().trim();

    if (newTaskText === "") {
      displayEmptyTaskNameError();
    } else {
      clearNewTaskError();
      addTaskIntoToTheBeDoneList(newTaskText);
      $newTaskDescription.val('');
    }
  });

  function displayEmptyTaskNameError() {
    var errorElemId = "newTaskError",
      errorHtml = '<span class="new-task__error-text" id="' + errorElemId + '">New task text should not be empty.</span>',
      $newTask = $(".new-task"),
      errorIsNotDisplayed = $newTask.find("#" + errorElemId).length === 0;

    if (errorIsNotDisplayed) {
      $newTask.append(errorHtml);
    }
  }

  function clearNewTaskError() {
    $(".new-task").find("#newTaskError").remove();
  }

  function addTaskIntoToTheBeDoneList(taskText) {
    var $task = $(generateNewTaskHTML(taskText));

    $task.hide().appendTo("#tasksToBeDoneList").fadeIn(300);

    //click task (listener)
    $task.click(function () {
      $(this).toggleClass("completed-task", 200);
    });
    //click task delete button (listener)
    $task.find(".delete-btn").click(function () {
      $task.fadeOut(500, function () {
        $(this).remove();
      });
    });

    $task.draggable({
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone",
      start: styleUiHelperClone,
      cursor: "move"
    });
  }

  function generateNewTaskHTML(taskText) {
    return (
      '<li class="task">' +
      '<span class="task__description">' + taskText + '</span>' +
      '<button class="task__btn delete-btn">Delete</button>' +
      '</li>'
    );
  }

  function styleUiHelperClone(event, ui) {
    var $tasksList = $(this).parent('.tasks');

    $(ui.helper).css({
      'width': $(event.target).outerWidth() + 'px',
      'border': $tasksList.css('border'),
      'border-radius': $tasksList.css('border-radius')
    });
  }
}


function initJQueryCompletedTasksListDroppable() {
  $("#completedTasksList").droppable({
    accept: "#tasksToBeDoneList > li",
    drop: function (event, ui) {
      var $completedTasksList = $(this),
        $uiDraggable = $(ui.draggable);

      $uiDraggable.fadeOut(300, function () {
        $uiDraggable.appendTo($completedTasksList).fadeIn(300);
        $uiDraggable.draggable({ disabled: true });
      });
    },
  });
}