$(function () {
  initJQueryAjaxSendFormDataToBackend();
});

function initJQueryAjaxSendFormDataToBackend() {
  $.post("./scripts/test.php", { name: "Test Name", email: "abc@example.com", description: "some text"})
    .done(function(data) { console.log(data); })
    .fail(function(error) { console.error(error); });
}