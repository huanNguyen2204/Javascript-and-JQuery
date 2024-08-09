var msg = `<b>page title:</b> ${document.title} <br />`;
msg += `<b>page address: ${document.URL}</b> <br />`;
msg += `<b>last modified: ${document.lastModified}</b>`;

var el = document.getElementById("footer");
el.innerHTML = msg;