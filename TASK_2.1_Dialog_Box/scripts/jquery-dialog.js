$(document).ready(function () {
  $("#dialog-question").dialog({
    autoOpen: false,
    modal: true,
    resizable: false,
    show: {
      effect: "fold",
      duration: 500
    },
    hide: {
      effect: "fold",
      duration: 500
    },
    buttons: {
      Yes: function () {
        $(this).dialog("close");
      },
      No: function () {
        $(this).dialog("close");
      }
    }
  });

  $("#dialog-link").on("click", function () {
    $("#dialog-question").dialog("open");
  });
});