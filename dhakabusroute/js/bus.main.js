function filterTable() {
  console.log("Filtering table...");

  var selects = document.querySelectorAll(".country-select");
  var tableRows = document.querySelectorAll("tbody tr");

  var selectedValues = Array.from(selects).map(function (select) {
    return select.value;
  });

  tableRows.forEach(function (row) {
    var countries = row.cells[1].textContent.split("⇄").map(function (country) {
      return country.trim(); // Trim whitespace from area names
    });
    var showRow = selectedValues.every(function (value) {
      return value === "" || countries.includes(value.trim());
    });

    row.style.display = showRow ? "" : "none";
  });
}