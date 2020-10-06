function toggleBurgerMenuBtn() {
  let burger = document.getElementById('nav-burger-btn'),
      activeClass = 'nav-burger__active';

  burger && burger.addEventListener('click', function (e) {
    e.preventDefault();
    e.currentTarget.classList.toggle(activeClass);
  }, false);
}

document.addEventListener('DOMContentLoaded', function () {
  toggleBurgerMenuBtn();
})