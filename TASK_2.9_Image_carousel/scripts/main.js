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
    imgCarousel.radioButtons = $(imgCarousel).find(".card__img-nav-buttons input[type='radio']");

    // init left arrow listeners
    var leftArrow = $(imgCarousel).find(".left-arrow")[0];
    $(leftArrow).click(function () {
      imgCarousel.updateCarouselImageIndex(-1);
      imgCarousel.animateCarouselImage();
      imgCarousel.updateCheckedRadioButton();
    });

    // init right arrow listeners
    var rightArrow = $(imgCarousel).find(".right-arrow")[0];
    $(rightArrow).click(function () {
      imgCarousel.updateCarouselImageIndex(+1);
      imgCarousel.animateCarouselImage();
      imgCarousel.updateCheckedRadioButton();
    });

    // init radio buttons listeners
    $(imgCarousel.radioButtons).each(function () {
      $(this).click(function () {
        imgCarousel.carouselImageIndex = this.getClickedRadioButtonIndex();
        imgCarousel.animateCarouselImage();
      });

      this.getClickedRadioButtonIndex = getClickedRadioButtonIndex;
    });

    imgCarousel.updateCarouselImageIndex = updateCarouselImageIndex;
    imgCarousel.animateCarouselImage = animateCarouselImage;
    imgCarousel.updateCheckedRadioButton = updateCheckedRadioButton;
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

  function updateCheckedRadioButton() {
    $(this.radioButtons[this.carouselImageIndex]).prop("checked", true);
  }

  function getClickedRadioButtonIndex() {
    var childrenOfParent = $(this).parent().children();

    for (var i = 0; i < childrenOfParent.length; i++) {
      if (childrenOfParent[i] === this) return i;
    }

    return -1;
  }
}