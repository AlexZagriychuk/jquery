$(function () {
  initJQueryAjaxNavigation();
});

function initJQueryAjaxNavigation() {
  // on the initial page load, loading home page into the #main block
  $("#main").load("./pages/home.html");

  // setting up page load on click and on focus + enter
  $("#home").click(function() {
    $("#main").load("./pages/home.html");
  });
  $("#home").on("keydown", function(e){
    if(isEnterKey(e))
      $("#main").load("./pages/home.html");
  });

  $("#about").click(function() {
    $("#main").load("./pages/about.html");
  });
  $("#about").on("keydown", function(e){
    if(isEnterKey(e))
      $("#main").load("./pages/about.html");
  });

  $("#contact").click(function() {
    $("#main").load("./pages/contact.html");
  });
  $("#contact").on("keydown", function(e){
    if(isEnterKey(e))
      $("#main").load("./pages/contact.html");
  });

  function isEnterKey(event) {
    return event.keyCode === 13;
  }
}