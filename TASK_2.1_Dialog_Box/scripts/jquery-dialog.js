$(document).ready(function () {
  $("#dialog-question").dialog({
    class: 'dialog-wrapper',
    autoOpen: false,
    modal: true,
    resizable: false,
    width: "500",
    show: {
      effect: "fold",
      duration: 500
    },
    hide: {
      effect: "fold",
      duration: 500
    },
    buttons: [
      {
        text: "Yes",
        class: 'dialog-button-yes',
        click: function () {
          $(this).dialog("close");
        }
      },
      {
        text: "No",
        class: 'dialog-button-no',
        click: function () {
          $(this).dialog("close");
        }
      }
    ]
  });

  $(".ui-dialog[aria-describedby='dialog-question']").addClass("dialog-question-wrapper");

  $("#dialog-link").on("click", function () {
    $("#dialog-question").dialog("open");
  });
});