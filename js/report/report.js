fetch("http://127.0.0.1:5000/report/")
  .then((response) => response.json())
  .then((report) => {
    $("#most-requested-ingredient").text(report.the_most_requested_ingredient);
    $("#month-with-more-revenue").text(
      getMonthName(report.month_with_more_revenue)
    );
    $("#top-3-customers").html(
      report.top_customers.map((customer) => `<li>${customer}</li>`)
    );
  });

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
