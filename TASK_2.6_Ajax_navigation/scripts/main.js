$(function () {
  initJQueryAjaxNavigation();
});

function initJQueryAjaxNavigation() {
  // on the initial page load, loading home page into the #main block
  $("#main").load("./pages/home.html");

  setUpAjaxLoadingOnClickOrEnterKey("#home", "#main", "./pages/home.html");
  setUpAjaxLoadingOnClickOrEnterKey("#about", "#main", "./pages/about.html");
  setUpAjaxLoadingOnClickOrEnterKey("#contact", "#main", "./pages/contact.html");

  function setUpAjaxLoadingOnClickOrEnterKey(clickableElementSelector, loadIntoElementSelector, dataToLoad) {
    $(clickableElementSelector).click(function() {
      $(loadIntoElementSelector).load(dataToLoad);
    });
    $(clickableElementSelector).on("keydown", function(e){
      if(isEnterKey(e))
        $(loadIntoElementSelector).load(dataToLoad);
    });
  }

  function isEnterKey(event) {
    return event.keyCode === 13;
  }
}