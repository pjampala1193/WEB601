/* ===== DIGITAL CLOCK ===== */

function currentTime() {
  var d = new Date();
  var hr = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var ampm;

  if (sec < 10) sec = "0" + sec;
  if (min < 10) min = "0" + min;

  if (hr === 12) {
    ampm = "PM";
  } else if (hr > 12) {
    hr -= 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  var clockEl = document.getElementById("clock");
  if (clockEl) {
    clockEl.innerText = hr + ":" + min + ":" + sec + " " + ampm;
  }

  setTimeout(currentTime, 1000);
}

currentTime();
