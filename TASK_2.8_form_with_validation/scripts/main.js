$(function () {
  initJQueryAjaxPostFormDataToBackend();
});

function initJQueryAjaxPostFormDataToBackend() {
  $("#feedback-form").submit(function (event) {
    // Stop form from submitting normally
    event.preventDefault();

    $.post("./scripts/test.php", $(this).serialize())
      .done(function (data) { console.log(data); })
      .fail(function (error) { console.error(error); });
  });
}