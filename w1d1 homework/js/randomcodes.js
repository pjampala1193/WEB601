/* ===== RANDOM CODES + ENABLE SUBMIT (Week 4 Day 2) ===== */

/* group variables in one area (as required) */
var code = "";      // store generated code
var getCode = "";   // store entered code
var btnvalue;       // for button boolean value

/* create variable to hold the type of characters we want to show as codes */
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$";

/* generate 8-character code */
function generateCode() {
  code = "";
  for (var i = 1; i <= 8; i++) {
    var char = Math.floor(Math.random() * str.length);
    code += str.charAt(char);
  }
  return code;
}

/* display generated code on page */
var codesEl = document.getElementById("codes");
if (codesEl) {
  codesEl.innerHTML = generateCode();
}

/* determine when to able or disable button */
function disableButton(btnvalue) {
  var btn = document.getElementById("submit");
  if (!btn) return;

  btn.disabled = btnvalue; // able/disable button

  if (btnvalue === true) {
    // set button and label color translucent (disabled)
    btn.style.backgroundColor = "rgba(73, 119, 209, 0.3)";
    btn.style.color = "rgba(255, 255, 255, 0.5)";
  } else {
    // set button and label color with no transparency (enabled)
    btn.style.backgroundColor = "rgba(73, 119, 209, 1)";
    btn.style.color = "rgba(255, 255, 255, 1)";
  }
}

/* listen to user input code */
var codebox = document.getElementById("codeentered"); // get textbox
if (codebox) {
  codebox.addEventListener("input", evaluateCode); // listen to code entered
}

/* run function if detected user had entered a character in textbox */
function evaluateCode() {
  getCode = document.getElementById("codeentered").value; // get character entered

  // remove any hidden characters entered/generated
  var charset1 = getCode.trim();
  var charset2 = code.trim();

  // test if code entered matches number of generated characters AND matches exactly
  if (charset1.length === charset2.length && charset1 === charset2) {
    disableButton(false); // if match, enable button
  } else {
    disableButton(true);  // otherwise keep disabled
  }
}
