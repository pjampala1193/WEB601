/* ===== Week 4 Day 3: Reveal one input based on dropdown selection ===== */

var contactSelect;
var emailBox;
var phoneBox;

function hideAll() {
  emailBox.style.display = "none";
  phoneBox.style.display = "none";
}

function handleSelection() {
  var selected = contactSelect.value;

  hideAll(); // only ONE visible at a time

  if (selected === "email") {
    emailBox.style.display = "block";
  } else if (selected === "phone") {
    phoneBox.style.display = "block";
  }
  // if "Select One" (value=""), nothing should be visible
}

document.addEventListener("DOMContentLoaded", function () {
  contactSelect = document.getElementById("contact-method");
  emailBox = document.getElementById("emailBox");
  phoneBox = document.getElementById("phoneBox");

  // On load: no input box visible until user selects an option
  hideAll();

  // Listen for dropdown change
  contactSelect.addEventListener("change", handleSelection);
});
