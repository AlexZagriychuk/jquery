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

$(function () {
  var datepickerCloseBtn = null, datepickerCloseBtnCopied = false;
  $("#datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 3,
    showAnim: "slideDown",
    showButtonPanel: true,
    showOn: "both",
    onSelect: singleFieldRangeDatepickerOnSelect,
    onClose: singleFieldRangeDatepickerOnClose,
    buttonImage: "images/icons/calendar.gif",
    buttonImageOnly: true,
    buttonText: "Select date"
  }).click(singleFieldRangeDatepickerOnClick);

  $('#ui-datepicker-div').on('click', '.ui-datepicker-close', function () {
    $('#datepicker').datepicker("hide");
  });

  function singleFieldRangeDatepickerOnSelect(selectedDate) {
    if (!$(this).data().datepicker.first) {
      $(this).data().datepicker.inline = true;
      $(this).data().datepicker.first = selectedDate;
      setTimeout(function () {
        $('#ui-datepicker-div').find('.ui-datepicker-buttonpane').append(datepickerCloseBtn);
      }, 1);
    } else {
      if (compareDates(selectedDate, $(this).data().datepicker.first) > 0) {
        $(this).val($(this).data().datepicker.first + " - " + selectedDate);
      } else {
        $(this).val(selectedDate + " - " + $(this).data().datepicker.first);
      }
      $(this).data().datepicker.inline = false;
    }
  }

  function compareDates(date1str, date2str) {
    let date1 = new Date(date1str);
    let date2 = new Date(date2str);
    return date1 > date2 ? 1 : date1 < date2 ? -1 : 0;
  }

  function singleFieldRangeDatepickerOnClose() {
    delete $(this).data().datepicker.first;
    $(this).data().datepicker.inline = false;
  }

  function singleFieldRangeDatepickerOnClick() {
    if (!datepickerCloseBtnCopied) {
      setTimeout(function () {
        datepickerCloseBtn = $('#ui-datepicker-div').find('.ui-datepicker-close').clone();
      }, 500);
      datepickerCloseBtnCopied = true;
    }
  }
});

$.datepicker._gotoToday = function (id) {
  var target = $(id);
  var inst = this._getInst(target[0]);
  if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
    inst.selectedDay = inst.currentDay;
    inst.drawMonth = inst.selectedMonth = inst.currentMonth;
    inst.drawYear = inst.selectedYear = inst.currentYear;
  }
  else {
    var date = new Date();
    inst.selectedDay = date.getDate();
    inst.drawMonth = inst.selectedMonth = date.getMonth();
    inst.drawYear = inst.selectedYear = date.getFullYear();
    // the below two lines are new
    this._setDateDatepicker(target, date);
    this._selectDate(id, this._getDateDatepicker(target));
  }
  this._notifyChange(inst);
  this._adjustDate(target);
}

$(function () {
  $("#brand").autocomplete({
    source: getBrands()
  });

  function getBrands() {
    var brandSpans = $(".card__item-brand .card-item__prop-value");
    var brandNamesSet = new Set();
    for (var i = 0; i < brandSpans.length; i++) {
      brandNamesSet.add(brandSpans[i].innerText);
    }
    return setToArray(brandNamesSet);
  }

  function setToArray(set) {
    // return Array.from(set); //ES6 does not work in IE11

    var arr = new Array(set.size);
    var i = 0;
    set.forEach(function(value) {
      arr[i++] = value;
    });
    return arr;
  }
});