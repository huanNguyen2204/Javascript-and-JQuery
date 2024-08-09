var inStock;
var shipping;

inStock = true;
shipping = false;

var elStock = document.getElementById("stock");
elStock.className = inStock;
console.log(elStock)

var elShip = document.getElementById("shipping");
elShip.className = shipping;