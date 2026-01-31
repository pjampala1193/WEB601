/* ------ RANDOM CODES (Contact page) ------ */

// Function to generate combination of characters
function generateCode() {
  var code = '';
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$';

  for (var i = 1; i <= 8; i++) {
    var char = Math.floor(Math.random() * str.length);
    code += str.charAt(char);
  }

  return code;
}

// Display generated code
var codesEl = document.getElementById("codes");
if (codesEl) {
  codesEl.innerHTML = generateCode();
}

// Disable submit button
function disableButton() {
  var btn = document.getElementById("submit");
  if (btn) btn.disabled = true;
}

// Activate function
disableButton();
