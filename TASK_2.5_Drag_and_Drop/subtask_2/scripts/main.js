$(function () {
  initJQueryDragAndDropForPhotosAndTrash();
});

function initJQueryDragAndDropForPhotosAndTrash() {
  // Let the photo-grid items be draggable
  $("#photo-grid > li").draggable({
    revert: "invalid", // when not dropped, the item will revert back to its initial position
    containment: "document",
    cursor: "move"
  });

  // Let the trash be droppable, accepting the photo-grid items
  $("#trash").droppable({
    accept: "#photo-grid > li",
    classes: {
      "ui-droppable-active": "ui-state-highlight"
    },
    drop: function (event, ui) {
      deleteImage(ui.draggable);
    }
  });

  function deleteImage($item) {
    $item.find("img").hide();
    $item.addClass("custom-puff").delay(300).hide(400);
  }
}