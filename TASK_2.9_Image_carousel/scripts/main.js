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
  var imgCarousels = $(".cards__img-carousel");
  $(imgCarousels).each(function () {
    var imgCarousel = this;
    imgCarousel.carouselImageIndex = 0;
    imgCarousel.images = $(imgCarousel).find(".card__img-list li");
    imgCarousel.navButtons = $(imgCarousel).find(".card__img-nav-buttons li");
    imgCarousel.navButtons.selectedIndex = 0;

    // init left arrow listeners
    var leftArrow = $(imgCarousel).find(".left-arrow")[0];
    $(leftArrow).click(function () {
      imgCarousel.updateCarouselImageIndex(-1);
      imgCarousel.animateCarouselImage();
      imgCarousel.updateCheckedNavButton();
    });

    // init right arrow listeners
    var rightArrow = $(imgCarousel).find(".right-arrow")[0];
    $(rightArrow).click(function () {
      imgCarousel.updateCarouselImageIndex(+1);
      imgCarousel.animateCarouselImage();
      imgCarousel.updateCheckedNavButton();
    });

    // init nav buttons listeners
    $(imgCarousel.navButtons).each(function () {
      $(this).click(function () {
        imgCarousel.carouselImageIndex = this.getClickedNavButtonIndex();
        imgCarousel.animateCarouselImage();
        imgCarousel.updateCheckedNavButton();
      });

      this.getClickedNavButtonIndex = getClickedNavButtonIndex;
    });

    imgCarousel.updateCarouselImageIndex = updateCarouselImageIndex;
    imgCarousel.animateCarouselImage = animateCarouselImage;
    imgCarousel.updateCheckedNavButton = updateCheckedNavButton;
  });

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
    if(imgCarousel.navButtons.selectedIndex === imgCarousel.carouselImageIndex)
      return;

    var checkedNavButtonClassName = "checked-img-nav-button";
    $(imgCarousel.navButtons).each(function(index) {
      var navButton = imgCarousel.navButtons[index];
      if(index === imgCarousel.carouselImageIndex) {
        $(navButton).addClass(checkedNavButtonClassName);
      } else {
        $(navButton).removeClass(checkedNavButtonClassName);
      }
    })

    imgCarousel.navButtons.selectedIndex = imgCarousel.carouselImageIndex;
  }

  function getClickedNavButtonIndex() {
    var childrenOfParent = $(this).parent().children();

    for (var i = 0; i < childrenOfParent.length; i++) {
      if (childrenOfParent[i] === this) return i;
    }

    return -1;
  }
}