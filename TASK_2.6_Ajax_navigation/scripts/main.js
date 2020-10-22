$(function () {
  initJQueryAjaxNavigation();
});

function initJQueryAjaxNavigation() {
  var selectorsAndPagesObj = {
    "#home": "./pages/home.html",
    "#about": "./pages/about.html",
    "#contact": "./pages/contact.html"
  }

  // on the initial page load, loading home page into the #main block
  $("#main").load(selectorsAndPagesObj["#home"]);

  for (var selector in selectorsAndPagesObj) {
    setUpAjaxLoadingOnClickOrEnterKey(selector, "#main", selectorsAndPagesObj[selector]);
  }

  function setUpAjaxLoadingOnClickOrEnterKey(clickableElementSelector, loadIntoElementSelector, dataToLoad) {
    $(clickableElementSelector).on('click keydown', function (e) {
      if (e.type === 'click' || (e.type === 'keydown' && isEnterKey(e))) {
        $(loadIntoElementSelector).load(dataToLoad);
      }
    });
  }

  function isEnterKey(event) {
    return event.keyCode === 13;
  }
}