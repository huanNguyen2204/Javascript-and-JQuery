var colors = new Array("white", "black", "custom");

colors[2] = "red";

var el = document.getElementById("colors");
el.innerHTML = colors[2];

console.log("ok")