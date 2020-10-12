$(function () {
  initJQueryUISortable();
});

function initJQueryUISortable() {
  $("#sortable-rainbow").sortable();
  $("#sortable-rainbow").disableSelection();
}