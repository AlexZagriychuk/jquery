$(function () {
  initJQueryFormValidation();
  initJQueryAjaxPostFormDataToBackend();
});

function initJQueryFormValidation() {
  $("#feedback-form").validate({
    // validation rules
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
      description: "required"
    },
    // validation error messages
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid email address",
      description: "Please enter a description"
    },
  });
}

function initJQueryAjaxPostFormDataToBackend() {
  $("#feedback-form").submit(function (event) {
    // Stop form from submitting normally
    event.preventDefault();

    if ($(this).valid()) {
      $.post("./scripts/test.php", $(this).serialize())
        .done(function (data) { console.log(data); })
        .fail(function (error) { console.error(error); });
    }
  });
}