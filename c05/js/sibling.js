var startItem = document.getElementById("two");
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

prevItem.className = "complete";
nextItem.className = "cool";

console.log(prevItem, nextItem);

