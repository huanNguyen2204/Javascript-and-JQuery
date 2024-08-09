var el = document.querySelector("li.hot");      // first match
el.className = "cool";

var els = document.querySelectorAll("li.hot");  // all match
els[1].className = "cool";