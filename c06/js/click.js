var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a><ldiv>';

msg += "<div><h2>System Maintance</h2>";
msg += "Our servers are being updated between 3 and 4.a.m";
msg += "During this time, there may be mirror disruptions to service</div>";

var elNote = document.createElement("div");
elNote.setAttribute("id", "note");
elNote.innerHTML = msg;
document.body.appendChild(elNote);

function dismissNote() {
  document.body.removeChild(elNote);
}

var elClose = document.getElementById("close");
elClose.addEventListener("click", dismissNote, false);