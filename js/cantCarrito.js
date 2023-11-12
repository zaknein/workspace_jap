const COUNT_CART = document.getElementById("CountCart");
let ArrayCart = JSON.parse(localStorage.getItem("cartlist")) || [];


document.addEventListener("DOMContentLoaded", function () {
		COUNT_CART.innerHTML = ArrayCart.length;
});
