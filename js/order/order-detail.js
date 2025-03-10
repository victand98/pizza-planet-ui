/**
 * Set the id to query the order
 */
let urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get("_id");

fetch(`http://127.0.0.1:5000/order/${_id}`)
  .then((response) => response.json())
  .then((order) => {
    order.detail = groupElementsByType(order.detail);
    let template = createRowTemplate(order);
    $("#order").append(template);
  });

/**
 * Group the elements by type in the order detail
 * @param details
 */
function groupElementsByType(details) {
  let groupedDetails = {};
  details.forEach((detail) => {
    let elementType = detail.element.element_type;
    if (!(elementType in groupedDetails)) {
      groupedDetails[elementType] = [];
    }
    groupedDetails[elementType].push(detail);
  });
  return groupedDetails;
}

/**
 * Find the template tag and populate it with the data
 * @param order
 */
function createRowTemplate(order) {
  let template = $("#order-template")[0].innerHTML;
  return Mustache.render(template, order);
}
