// Se traen todas los botones del HTML
const PRICEASCENDBTN = document.getElementById("sortAsc");
const PRICEDESCENDBTN = document.getElementById("sortDesc");
const SOLDCOUNT = document.getElementById("sortByCount");
const COUNTER = document.getElementById("rangeFilterCount");
const MINQA = document.getElementById("rangeFilterCountMin");
const MAXQA = document.getElementById("rangeFilterCountMax");
const CLEAN = document.getElementById("clearRangeFilter");
let currentProductArray = [];
// Función que setea en el LocalStorage el ID del producto
function setProductID(id) {
	localStorage.setItem("ProductID", id);
	window.location = "product-info.html";
}
// Impresora de productos dentro de una categoría
function showProductList() {
	let htmlContentToAppend = "";

	document.getElementById("titulo").innerHTML = `<h2>Productos</h2>
        <p class="lead">Verás aquí todos los productos de la categorias ${currentProductArray.catName}.</p>`;
	for (let i = 0; i < currentProductArray.products.length; i++) {
		let product = currentProductArray.products[i];
		htmlContentToAppend += `
            <div onclick="setProductID(${product.id})" class=" cursor-active product-container">
                
                    
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
// Impresora de productos dentro de una categoría
// Funcionamiento del sistema de filtrado
document.addEventListener("keyup", function (e) {
	//detecta el teclado y procede a hacer una accion
	if (e.target.matches("#buscador")) {
		//si donde se detecto el target coidide con el id buscador entra al if
		let product = document.querySelectorAll(".product-container"); //traigo todo los productos
		for (p of product) {
			//recorro los productos
			if (
				//aca busco los nombre y las descripciones las paso a minuscula y con include comparo coicidencias con lo que escribi en el buscador
				p.querySelector("#n").innerHTML.toLowerCase().includes(e.target.value.toLowerCase()) ||
				p.querySelector("#d").innerHTML.toLowerCase().includes(e.target.value.toLowerCase()) ||
				e.target.value === ""
			) {
				p.classList.remove("filtro"); //en caso de que sea verdadero le saco el filtro que el que los oculta
			} else {
				p.classList.add("filtro"); //aca se los agrego porque no coincide
			}
		}
	}
});
// Funcionamiento del sistema de filtrado
// Ejecución de función Fetch al cargar la página para hacer display de la lista de productos
document.addEventListener("DOMContentLoaded", function (e) {
	getJSONData(PRODUCTS_URL + localStorage.catID + ".json").then(function (resultObj) {
		if (resultObj.status == "ok") {
			currentProductArray = resultObj.data;
			showProductList();
		}
	});
});
// Ejecución de función Fetch al cargar la página para hacer display de la lista de productos
// Funcionalidad de display del campo de filtrar (buscar producto)
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
// Funcionalidad de display del campo de filtrar (buscar producto)
// Funcionalidad para esconder el display del campo filtrar si se clickea fuera del mismo
document.addEventListener("click", function (event) {
	if (!buscador.contains(event.target) && !bus.contains(event.target)) {
		buscador.classList.remove("MostrarBuscador");
		checkboton.classList.remove("bus");
	}
});
// Funcionalidad para esconder el display del campo filtrar si se clickea fuera del mismo
// Funcionalidades Sort Ascendente y Descendente, así como por cantidad de vendidos
PRICEASCENDBTN.addEventListener("click", () => {
	currentProductArray.products.sort((a, b) => {
		return a.cost - b.cost;
	});
	showProductList(currentProductArray.products);
});
PRICEDESCENDBTN.addEventListener("click", () => {
	currentProductArray.products.sort((a, b) => {
		return b.cost - a.cost;
	});
	showProductList(currentProductArray.products);
});
SOLDCOUNT.addEventListener("click", () => {
	currentProductArray.products.sort((a, b) => {
		return b.soldCount - a.soldCount;
	});
	showProductList(currentProductArray.products);
});
// Funcionalidades Sort Ascendente y Descendente, así como por cantidad de vendidos
// Sistema de filtrado por rango de costos
COUNTER.addEventListener("click", () => {
	if(MAXQA.value!="" && MINQA.value!=""){
	let filteredProducts = currentProductArray.products.filter(
		product => product.cost >= MINQA.value && product.cost <= MAXQA.value
	);
	currentProductArray.products = filteredProducts;
	showProductList(currentProductArray.products);
	console.log(filteredProducts);
}
});
// Sistema de filtrado por rango de costos
// Funcionalidad de filtrado 
CLEAN.addEventListener("click", () => {
	MINQA.value = "";
	MAXQA.value = "";
	getJSONData(PRODUCTS_URL + localStorage.catID + ".json").then(function (resultObj) {
		if (resultObj.status == "ok") {
			currentProductArray = resultObj.data;
			showProductList();
		}
	});
});
// Funcionalidad de filtrado 