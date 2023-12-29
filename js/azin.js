document.addEventListener("DOMContentLoaded", function () {
  function checkAccommodation(selectElement) {
    var unsureLocationInput = document.getElementById("unsure-location");
    if (selectElement.value === "Unsure") {
      unsureLocationInput.style.display = "block";
    } else {
      unsureLocationInput.style.display = "none";
    }
  }

  document
    .getElementById("other_conflict_checkbox")
    .addEventListener("change", function () {
      document.getElementById("other_conflict_input").style.display = this
        .checked
        ? "block"
        : "none";
    });

  document
    .getElementById("other_abuse_checkbox")
    .addEventListener("change", function () {
      document.getElementById("other_abuse_input").style.display = this.checked
        ? "block"
        : "none";
    });

  document
    .getElementById("income_source")
    .addEventListener("change", function () {
      document.getElementById("other_income_source").style.display = this
        .checked
        ? "block"
        : "none";
    });

    
});
