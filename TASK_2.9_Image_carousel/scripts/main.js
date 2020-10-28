document.addEventListener('DOMContentLoaded', function () {
  initToggleBurgerMenuBtn();
  initJQueryImageCarousel();
})

function initToggleBurgerMenuBtn() {
  let burger = document.getElementById('nav-burger-btn'),
    activeClass = 'nav-burger__active';

  burger && burger.addEventListener('click', function (e) {
    e.preventDefault();
    e.currentTarget.classList.toggle(activeClass);
  }, false);
}

function initJQueryImageCarousel() {
  var imgCarousels = $(".cards__img-carousel"),
    checkedNavButtonClassName = "checked-img-nav-button";

  $(imgCarousels).each(function () {
    var imgCarousel = this,
      imgNavButtonsClassName = "card__img-nav-buttons";

    imgCarousel.carouselImageIndex = 0;
    imgCarousel.images = $(imgCarousel).find(".card__img-list li");
    $(imgCarousel).append(generateNavButtonsListHTML(imgNavButtonsClassName, imgCarousel.images.length));
    imgCarousel.navButtons = $(imgCarousel).find("." + imgNavButtonsClassName + " li");

    // init left and right arrow listeners
    $('.img-nav-arrow', imgCarousel).on('click', function (e) {
      e.preventDefault();

      $(this).hasClass('left-arrow')
        ? imgCarousel.updateCarouselImageIndex(-1)
        : imgCarousel.updateCarouselImageIndex(+1);

      imgCarousel.animateCarouselImage();
      imgCarousel.updateCheckedNavButton();
    });

    // init nav buttons listeners
    $(imgCarousel.navButtons).each(function () {
      $(this).click(function () {
        var clickedNavButtonIndex = this.getClickedNavButtonIndex();

        if (imgCarousel.carouselImageIndex !== clickedNavButtonIndex) {
          imgCarousel.carouselImageIndex = clickedNavButtonIndex;
          imgCarousel.animateCarouselImage();
          imgCarousel.updateCheckedNavButton();
        }
      });

      this.getClickedNavButtonIndex = getClickedNavButtonIndex;
    });

    imgCarousel.updateCarouselImageIndex = updateCarouselImageIndex;
    imgCarousel.animateCarouselImage = animateCarouselImage;
    imgCarousel.updateCheckedNavButton = updateCheckedNavButton;
  });

  function generateNavButtonsListHTML(listCssClass, listItemsCount) {
    var html = '<ul class="' + listCssClass + '">';

    for (var i = 0; i < listItemsCount; i++) {
      if (i === 0) {
        html += '<li class="' + checkedNavButtonClassName + '"></li>';
      } else {
        html += '<li></li>';
      }
    }

    return html + "</ul>"
  }

  function updateCarouselImageIndex(diff) {
    this.carouselImageIndex += diff;
    var imagesLength = this.images.length;

    if (this.carouselImageIndex < 0) {
      this.carouselImageIndex += imagesLength;
    } else if (this.carouselImageIndex >= imagesLength) {
      this.carouselImageIndex %= imagesLength;
    }
  }

  function animateCarouselImage() {
    var newMarginLeft = -100 * this.carouselImageIndex + '%';

    $(this.images[0]).animate({ marginLeft: newMarginLeft });
  }

  function updateCheckedNavButton() {
    var imgCarousel = this;

    $(imgCarousel.navButtons).each(function (index) {
      var navButton = imgCarousel.navButtons[index];

      if (index === imgCarousel.carouselImageIndex) {
        $(navButton).addClass(checkedNavButtonClassName);
      } else {
        $(navButton).removeClass(checkedNavButtonClassName);
      }
    })
  }

  function getClickedNavButtonIndex() {
    var childrenOfParent = $(this).parent().children();

    for (var i = 0; i < childrenOfParent.length; i++) {
      if (childrenOfParent[i] === this) return i;
    }

    return -1;
  }
}