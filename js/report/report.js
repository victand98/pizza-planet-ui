fetch("http://127.0.0.1:5000/report/")
  .then((response) => response.json())
  .then((report) => {
    report.month_with_more_revenue = getMonthName(
      report.month_with_more_revenue
    );
    let template = createReportTemplate(report);
    $("#report").append(template);
  });

/**
 * Get the name of the month
 * @param monthNumber
 */
function getMonthName(monthNumber) {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[monthNumber - 1];
}

function createReportTemplate(report) {
  let template = $("#report-template")[0].innerHTML;
  return Mustache.render(template, report);
}
