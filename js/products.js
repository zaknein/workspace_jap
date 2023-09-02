//const CAT_101 = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const PRICEASCENDBTN = document.getElementById("sortAsc")
const PRICEDESCENDBTN	= document.getElementById("sortDesc")
const SOLDCOUNT = document.getElementById("sortByCount")
const COUNTER = document.getElementById("rangeFilterCount")
const MINQA = document.getElementById("rangeFilterCountMin")
const MAXQA = document.getElementById("rangeFilterCountMax")
const CLEAN = document.getElementById("clearRangeFilter")
let currentProductArray = [];

function setCatID(id) {
	localStorage.setItem("catID", id);
	window.location = "products.html";
}

function showProductList() {
	let htmlContentToAppend = "";

	document.getElementById("titulo").innerHTML = `<h2>Productos</h2>
        <p class="lead">Verás aquí todos los productos de la categorioa ${currentProductArray.catName}.</p>`;
	for (let i = 0; i < currentProductArray.products.length; i++) {
		let product = currentProductArray.products[i];
			htmlContentToAppend += `
            <div onclick="setCatID(${product.id})" class="list-group-item list-group-item-action cursor-active product-container">
                
                    
                        <img src="${product.image}" alt="${product.name}" class=" img">
                    
                    <div class="col">
                        <div class="product-overlay">
                            <div class="d-flex w-100 justify-content-between">
                             <h4 id="n">${product.name} </h4>
                             <small >${product.soldCount} vendidos</small>
                            </div>
                         <h5 class"" id="precio"> ${product.currency} ${product.cost}</h3>
                         <p id="d">${product.description}</p>
                        </div>
                    </div>
                
            </div>
            `;
	}

	document.getElementById("contenedor-articulo").innerHTML = htmlContentToAppend;
}

/*document.getElementById("but").addEventListener("click", function () {
	for (let i = 0; i < currentProductArray.products.length; i++) {
		for (let j = 0; j < currentProductArray.products.length - 1; j++) {
			if (currentProductArray.products[j].cost > currentProductArray.products[j + 1].cost) {
				let aux = currentProductArray.products[j];
				currentProductArray.products[j] = currentProductArray.products[j + 1];
				currentProductArray.products[j + 1] = aux;
			}
		}
	}

	showProductList();
});*/

document.addEventListener("keyup", function (e) {
	//detecta el teclado y procede a hacer una accion
	if (e.target.matches("#buscador")) {
		//si donde se detecto el target coidide con el id buscador entra al if
		let product = document.querySelectorAll(".product-container"); //traigo todo los productos
		for (p of product) {
			//recorro los productos
			if (
				//aca busco los nombre y las descripciones las paso a minuscula y con include comparo coicidencias con lo que escribi en el buscador
				p.querySelector("#n").innerHTML.toLowerCase().includes(e.target.value) ||
				p.querySelector("#d").innerHTML.toLowerCase().includes(e.target.value) ||
				e.target.value === ""
			) {
				p.classList.remove("filtro"); //en caso de que sea verdadero le saco el filtro que el que los oculta
			} else {
				p.classList.add("filtro"); //aca se los agrego porque no coincide
			}
		}

		/*document.querySelectorAll(".product-container").forEach(producto => {
			if (
				producto.querySelector("#n").innerHTML.toLowerCase().includes(e.target.value) ||
				producto.querySelector("#d").innerHTML.toLowerCase().includes(e.target.value)
			) {
				producto.classList.remove("filtro");
			} else {
				producto.classList.add("filtro");
			}

			//console.log(producto.querySelector("#n").innerHTML.toLowerCase().includes(e.target.value));
		});*/
	}
});
document.addEventListener("DOMContentLoaded", function (e) {
	getJSONData(PRODUCTS_URL + localStorage.catID + ".json").then(function (resultObj) {
		if (resultObj.status == "ok") {
			currentProductArray = resultObj.data;
			showProductList();
		}
	});
});

let checkboton = document.getElementById("bus");
let buscador = document.getElementById("buscador");
bus.addEventListener("click", function () {
	if (buscador.classList.contains("MostrarBuscador")) {
		buscador.classList.remove("MostrarBuscador");
		checkboton.classList.remove("bus");
	} else {
		buscador.classList.add("MostrarBuscador");
		checkboton.classList.add("bus");
		buscador.focus();
	}
});

document.addEventListener("click", function (event) {
	if (!buscador.contains(event.target) && !bus.contains(event.target)) {
		buscador.classList.remove("MostrarBuscador");
		checkboton.classList.remove("bus");
	}
});


PRICEASCENDBTN.addEventListener("click", ()=>{
	currentProductArray.products.sort((a, b) => {return a.cost - b.cost});
	showProductList(currentProductArray.products);
})
PRICEDESCENDBTN.addEventListener("click", ()=>{
	currentProductArray.products.sort((a, b) => {return b.cost - a.cost});
	showProductList(currentProductArray.products);
})
SOLDCOUNT.addEventListener("click", ()=>{
	currentProductArray.products.sort((a, b) => {return b.soldCount - a.soldCount});
	showProductList(currentProductArray.products);
})
COUNTER.addEventListener("click", ()=>{
	let filteredProducts = currentProductArray.products.filter(product => product.cost >= MINQA.value && product.cost <= MAXQA.value);
	currentProductArray.products = filteredProducts;
	showProductList(currentProductArray.products);
	console.log(filteredProducts);
})
CLEAN.addEventListener("click", ()=>{
	MINQA.value = "";
	MAXQA.value = "";
	getJSONData(PRODUCTS_URL + localStorage.catID + ".json").then(function (resultObj) {
		if (resultObj.status == "ok") {
			currentProductArray = resultObj.data;
			showProductList();
		}
	});
})
