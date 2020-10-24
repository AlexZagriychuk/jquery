$(function () {
  initJQueryFormValidation();
  initJQueryAjaxPostFormDataToBackend();
});

function initJQueryFormValidation() {
  $.validator.addMethod(
    "regex",
    function (value, element, regexp) {
      var re = new RegExp(regexp);
      return this.optional(element) || re.test(value);
    },
    "Please check your input."
  );

  $("#feedback-form").validate({
    // validation rules
    rules: {
      name: "required",
      email: {
        required: true,
        email: true,
        // any 2 or more symbols before @; then @; then any 2 or more symbols before .; then .; then any 2 or more symbols
        regex: "^[^@]{2,}@[^\\.]{2,}\\..{2,}$"
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