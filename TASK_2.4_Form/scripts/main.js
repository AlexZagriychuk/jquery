$(function () {
  initJQueryUIDatePicker();
  initJQueryUIAutocomplete();
  initJQueryUISelect();
  initJQueryUICheckbox();
  initJQueryUIButton();
});

function initJQueryUIDatePicker() {
  $("#departure-date").datepicker({
    changeMonth: true,
    changeYear: true,
    showAnim: "slideDown",
    showButtonPanel: true
  });

  $.datepicker._gotoToday = function (id) {
    var target = jQuery(id),
      inst = this._getInst(target[0]),
      date = new Date();

    if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
      inst.selectedDay = inst.currentDay;
      inst.drawMonth = inst.selectedMonth = inst.currentMonth;
      inst.drawYear = inst.selectedYear = inst.currentYear;
    } else {
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
}

function initJQueryUIAutocomplete() {
  var airports = [
    "[ATL] Hartsfield–Jackson Atlanta International Airport",
    "[PEK] Beijing Capital International Airport",
    "[LAX] Los Angeles International Airport",
    "[DXB] Dubai International Airport",
    "[HND] Tokyo Haneda Airport",
    "[ORD] O'Hare International Airport",
    "[LHR] London Heathrow Airport",
    "[PVG] Shanghai Pudong International Airport",
    "[CDG] Charles de Gaulle Airport",
    "[DFW] Dallas/Fort Worth International Airport",
    "[CAN] Guangzhou Baiyun International Airport",
    "[AMS] Amsterdam Airport Schiphol",
    "[HKG] Hong Kong International Airport",
    "[ICN] Seoul Incheon International Airport",
    "[FRA] Frankfurt Airport",
    "[DEN] Denver International Airport",
    "[DEL] Indira Gandhi International Airport",
    "[SIN] Singapore Changi Airport",
    "[BKK] Suvarnabhumi Airport",
    "[JFK] John F. Kennedy International Airport"
  ];

  $("#reservation__find-airport-input").autocomplete({
    source: airports
  });
}

function initJQueryUISelect() {
  $("#meal-options").selectmenu();
}

function initJQueryUICheckbox() {
  $("fieldset input").checkboxradio({
    icon: false
  });
}

function initJQueryUIButton() {
  $("#continue-reservation").button({
    icon: "ui-icon-circle-arrow-e",
    iconPosition: "end"
  });
}
