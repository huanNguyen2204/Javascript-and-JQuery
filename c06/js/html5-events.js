function setup() {
  var textInput;
  textInput = document.getElementById("message");
  textInput.focus();
}

window.addEventListener("DOMContentloaded", setup, false);

window.addEventListener("beforeload", function(event) {
  return "You have changes that have not been saved...";
}, false);