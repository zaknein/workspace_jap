const CAT_101 = "https://japceibal.github.io/emercado-api/cats_products/101.json";
let currentProductArray = [];

function setCatID(id) {
	localStorage.setItem("catID", id);
	window.location = "products.html";
}
function showProductList() {
	let htmlContentToAppend = "";
	for (let i = 0; i < currentProductArray.products.length; i++) {
		let product = currentProductArray.products[i];

		htmlContentToAppend += `
            <div onclick="setCatID(${product.id})" class="list-group-item list-group-item-action cursor-active product-container">
                
                    
                        <img src="${product.image}" alt="${product.name}" class=" img">
                    
                    <div class="col">
                        <div class="product-overlay">
                            <div class="d-flex w-100 justify-content-between">
                             <h4 class="">${product.name} </h4>
                             <small >${product.soldCount} vendidos</small>
                            </div>
                         <h5 class"" id="precio"> ${product.currency} ${product.cost}</h3>
                         <p class="">${product.description}</p>
                        </div>
                    </div>
                
            </div>
            `;
	}

	document.getElementById("contenedor-articulo").innerHTML = htmlContentToAppend;
}

document.addEventListener("DOMContentLoaded", function (e) {
	getJSONData(CAT_101).then(function (resultObj) {
		if (resultObj.status == "ok") {
			currentProductArray = resultObj.data;
			showProductList();
		}
	});
});
