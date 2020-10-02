$(function () {
  $("#datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 3,
    showAnim: "slideDown",
    showButtonPanel: true,
    showOn: "both",
    buttonImage: "images/icons/calendar.gif",
    buttonImageOnly: true,
    buttonText: "Select date"
  })
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