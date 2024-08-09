var firstItem = document.getElementById("one");
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerContext;

var msg = `<p>textContext: ${showTextContent}</p>`;
msg += `<p>innerText ${showInnerText}</p>`;

var el = document.getElementById("scriptResult");
el.innerHTML = msg;

firstItem.textContent = "hihi";