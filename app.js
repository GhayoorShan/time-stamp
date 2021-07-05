$(document).ready(function () {
  var now = moment();
  $("#now").text(now.format("llll"));

  $("#submit").on("click", function () {
    var startDate = moment($("#start-time").val());
    console.log("Start date is valid", startDate.isValid());

    var endDate = moment($("#end-time").val());
    console.log("Start date is valid", endDate.isValid());

    var inSeconds = endDate.diff(startDate, "seconds"); // Finding the Difference
    var inMinutes = endDate.diff(startDate, "minutes");
    var inHours = endDate.diff(startDate, "hours");
    var inDays = endDate.diff(startDate, "days");
    var inWeeks = endDate.diff(startDate, "weeks");
    var inMonths = endDate.diff(startDate, "months");
    var inYears = endDate.diff(startDate, "years");

    $("#inSeconds")
      .text(inSeconds)
      .append(" " + "seconds");

    $("#inMinutes")
      .text(inMinutes)
      .append(" " + "minutes");

    $("#inHours")
      .text(inHours)
      .append(" " + "hours");

    $("#inDays")
      .text(inDays)
      .append(" " + "days");

    $("#inWeeks")
      .text(inWeeks)
      .append(" " + "weeks");

    $("#inMonths")
      .text(inMonths)
      .append(" " + "months");

    $("#inYears")
      .text(inYears)
      .append(" " + "years");
  });
});

// window.onload = function () {
//   var now = moment();
//   $("#now").text("now");
// };
