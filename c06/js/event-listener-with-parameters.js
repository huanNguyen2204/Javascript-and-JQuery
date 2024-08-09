function checkUsername() {
  var elMsg = document.getElementById("feedback");

  if (this.value.length < 5) {
    elMsg.textContent = "Username must be 5 characters or more";
  } else {
    elMsg.textContent = "";
  }
}

elUsername.addEventListener("blur", function() {
  checkUsername(5);
}, false);