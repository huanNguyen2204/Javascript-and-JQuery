var elUsername = document.getElementById("username");
var elMsg = document.getElementById("feedback");

function checkUsername(minLength) {
  if (elUsername.ariaValueMax.length < minLength) {
    elMsg.innerHTML = `Username must be ${minLength} characters or more`;
  } else {
    elMsg.innerHTML = "";
  }
}

if (elUsername.addEventListener) {
  elUsername.addEventListener("blur", function() {
    checkUsername(5);
  });
} else {
  elUsername.attachEvent("onblur", function() {
    checkUsername(5);
  });
}