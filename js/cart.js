const CONTAINER = document.getElementById('cart-list');
const INFO = JSON.parse(localStorage.getItem('cartlist'));
const QUANTITIES = document.getElementsByClassName('input-quantity');
// Función para borrar Items del Carrito
function DeleteCartItem(e) {
    const ITEMID = Number(e.target.getAttribute('cart-id'))
    const NEWLSCARTLIST = [];
    for (let i = 0; i < INFO.length; i++) {
        if (!(INFO[i].id === ITEMID)) {
            NEWLSCARTLIST.push(INFO[i])
        }
    }
    localStorage.setItem('cartlist', JSON.stringify(NEWLSCARTLIST));
    location.reload();
}
// Función para cambiar las cantidades de los Items en el Carrito Y calcular el nuevo Subtotal
function QuantityChange(e) {
  // Agregar Item Quantity al LS y reimprimirlo continuamente
    for (let i = 0; i < INFO.length; i++){
      if ( INFO[i].id == e.target.id){
        INFO[i].quantity = e.target.valueAsNumber;
        localStorage.setItem('cartlist',JSON.stringify(INFO))
      }
    }
    const quantity = e.target.valueAsNumber;
    const cardselected = e.target.parentElement.parentElement; // Obtén la carta actual
    const cost = parseFloat(cardselected.querySelector('.cost').textContent);
    const subtotal = quantity * cost;
    cardselected.querySelector('.subtotal').textContent = `${subtotal}`;
    
}


// Impresora de artículos en el Carrito
function ShowCart() {
    let htmlContentToAppend = '';
    let cartitemcards = '';

    function Tousd(curr, val){
      if (curr !== 'USD'){
        return val/41;
      } else {
        return val
      }
    }
    for (let i = 0; i < INFO.length; i++) {
        cartitemcards += `<article  class="article-preview">
        <figure>
            <img
                src="${INFO[i].imgsource}"
                alt="${INFO[i].name}"
                title="${INFO[i].name}"
            />
        </figure>
        <div>
            <h2>${INFO[i].name}</h2>
            <p> USD <span class="cost">${parseInt(Tousd(INFO[i].currency,INFO[i].cost))}</span></p>
            <hr>
            <div class="card-order">
              <p>Cantidad: </p>
              <input 
              onChange="QuantityChange(event),changeTotalCost()"
              
              type="number" 
              value="${INFO[i].quantity}"
              class="input-quantity text-center"
              min="1"
              id="${INFO[i].id}"
              />
            </div>
            <hr>
            <div class="card-order">

            
              <div class="d-flex">
              <p class="Moneda">USD</p> 
              <span class="subtotal ms-1">${parseInt(Tousd(INFO[i].currency,INFO[i].cost * INFO[i].quantity))}</span>
              </div>
              <input
                  onClick="DeleteCartItem(event)"
                  type="image" 
                  src="img/delete_btn.png" 
                  class="deleteCartItemBtn" 
                  cart-id="${INFO[i].id}"
                  />
            </div>
            
        </div>
    </article>`
    }
// Si no hay artículos en el carrito, se muestra el siguiente mensaje
    if (cartitemcards === '') {
        htmlContentToAppend = `
        <p>No se encontraron artículos agregados al carrito</p>
    `
    } else {
        htmlContentToAppend = `${cartitemcards}`
    }


    CONTAINER.innerHTML = htmlContentToAppend
    
}
document.addEventListener('DOMContentLoaded', ShowCart);


/*------------------------------Mostrando Precio Final---------------------------------*/

function changeTotalFinal() {
	let totalC=document.getElementById("CostoEnvio").textContent.match(/U\$D (\d+\.\d+)/);
	let totalE=document.getElementById("Total-Productos").textContent.match(/U\$D (\d+\.\d+)/);
	let t =parseFloat(totalC[1])+parseFloat(totalE[1]);
		
	document.getElementById("Total").innerHTML = "U$D " + t.toFixed(2);
}

function changeTotalCost() {
	const cost = document.getElementsByClassName("subtotal");
    
	let costTotal = 0;
	for (let i = 0; i < cost.length; i++) {
	
			costTotal += parseInt(cost[i].innerHTML);
		
	}

	document.getElementById("Total-Productos").innerHTML = "U$D " + costTotal.toFixed(2);
	ChangeCostoEnvio();
	changeTotalFinal();
}

function ChangeCostoEnvio() {
	let totalC = document.getElementById("Total-Productos").textContent.match(/U\$D (\d+\.\d+)/);
	const CostoEnvio = document.getElementsByClassName("custom-control-input");
	let inputEnvios;
	for (let i = 0; i < CostoEnvio.length; i++) {
		if (CostoEnvio[i].checked) {
			inputEnvios = CostoEnvio[i];
		}
	}
	if (inputEnvios.id === "goldradio") {
		document.getElementById("CostoEnvio").innerHTML = "U$D " + (parseFloat(totalC[1]) * 0.13).toFixed(2);
	} else if (inputEnvios.id === "premiumradio") {
		document.getElementById("CostoEnvio").innerHTML = "U$D " + (parseFloat(totalC[1]) * 0.07).toFixed(2);
	} else {
		document.getElementById("CostoEnvio").innerHTML = "U$D " + (parseFloat(totalC[1]) * 0.03).toFixed(2);
	}

	changeTotalFinal();
}
document.addEventListener("DOMContentLoaded", changeTotalCost,ChangeCostoEnvio,changeTotalFinal);

// Función para ocultar los metodos de pago

document.addEventListener("DOMContentLoaded", () => {
    const MASTER = document.getElementById("mastercardBtn");
    const VISA = document.getElementById("visaBtn");
    const MAESTRO = document.getElementById("maestroBtn");
    const CONTAINER = document.getElementById("methodInfoContainer");

    MASTER.addEventListener("click", () => {
      CONTAINER.innerHTML = `<div id="mastercard">
        <div class="row g-3">
        <div class="col-12">
          <label for="masterinputCardNumber" class="form-label">Nro de Tarjeta</label>
          <input type="text" class="form-control" id="masterinputCardNumber" placeholder="xxxx-xxxx-xxxx-xxxx-xxxx" minlength="17" required>
          <div class="valid-feedback">
            Valido!
          </div>
          <div class="invalid-feedback">
            Ingrese Nro de Tarjeta
          </div>
        </div>
        <div class="col-12">
          <label for="masterinputName" class="form-label">Nombre del titular</label>
          <input type="text" class="form-control mb-0" id="masterinputName" required>
          <div class="valid-feedback">
            Valido!
          </div>
          <div class="invalid-feedback">
            Nombre de titular
          </div>
        </div>
        <div class="col-md-6">
          <label for="masterExplirationDate" class="form-label">Fecha de Expiracion</label>
          <input type="email" class="form-control" id="masterExplirationDate" required>
          <div class="valid-feedback">
            Valido!
          </div>
          <div class="invalid-feedback">
            Ingrese fecha
          </div>
        </div>
        <div class="col-md-6">
          <label for="masterCVC" class="form-label">CVC</label>
          <input type="password" class="form-control" id="masterCVC" required>
          <div class="valid-feedback">
            Valido!
          </div>
          <div class="invalid-feedback">
            Ingrese CVC
          </div>
        </div>
      </div>
    </div>`
    });
    VISA.addEventListener("click", () => {
      CONTAINER.innerHTML = `<div id="visa">
      <div class="row g-3">
        <div class="col-12">
          <label for="visainputCardNumber" class="form-label">Nro de Tarjeta</label>
          <input type="text" class="form-control" id="visainputCardNumber" placeholder="xxxx-xxxx-xxxx-xxxx-xxxx" minlength="17" required>
          <div class="valid-feedback">
            Valido!
          </div>
          <div class="invalid-feedback">
            Ingrese Nro de Tarjeta
          </div>
        </div>
      
        <div class="col-12">
          <label for="visainputName" class="form-label">Nombre</label>
          <input type="text" class="form-control mb-0" id="visainputName" required>
          <div class="valid-feedback">
            Valido!
          </div>
          <div class="invalid-feedback">
            Nombre de titular
          </div>
        </div>
        <div class="col-md-6">
          <label for="visaExplirationDate" class="form-label">Fecha de Expiracion</label>
          <input type="email" class="form-control" id="visaExplirationDate" required>
          <div class="valid-feedback">
            Valido!
          </div>
          <div class="invalid-feedback">
            Ingrese fecha
          </div>
        </div>
        <div class="col-md-6">
          <label for="visaCVC" class="form-label">CVC</label>
          <input type="password" class="form-control" id="visaCVC" required>
          <div class="valid-feedback">
            Valido!
          </div>
          <div class="invalid-feedback">
            Ingrese CVC
          </div>
        </div>
      </div>
    </div>`
    });
    MAESTRO.addEventListener("click", () => {
      CONTAINER.innerHTML = `<div id="maestro">
      <div class="row g-3">
        <div class="col-12">
          <label for="maestroinputCardNumber" class="form-label">Nro de Tarjeta</label>
          <input type="text" class="form-control" id="maestroinputCardNumber" placeholder="xxxx-xxxx-xxxx-xxxx-xxxx" minlength="17" required>
          <div class="valid-feedback">
            Valido!
          </div>
          <div class="invalid-feedback">
            Ingrese Nro de Tarjeta
          </div>
        </div>
        <div class="col-12">
          <label for="maestroinputName" class="form-label">Nombre</label>
          <input type="text" class="form-control mb-0" id="maestroinputName" required>
          <div class="valid-feedback">
            Valido!
          </div>
          <div class="invalid-feedback">
            Nombre de titular
          </div>
        </div>
        <div class="col-md-6">
          <label for="maestroExplirationDate" class="form-label">Fecha de Expiracion</label>
          <input type="email" class="form-control" id="maestroExplirationDate" required>
          <div class="valid-feedback">
            Valido!
          </div>
          <div class="invalid-feedback">
            Ingrese fecha
          </div>
        </div>
        <div class="col-md-6">
          <label for="maestroCVC" class="form-label">CVC</label>
          <input type="password" class="form-control" id="maestroCVC" required>
          <div class="valid-feedback">
            Valido!
          </div>
          <div class="invalid-feedback">
            Ingrese CVC
          </div>
        </div>
      </div>
    </div>`
    });
    
  });
(() => {
  'use strict'
  

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (INFO.length === 0){
        alert("Debes agregar al menos un articulo para realizar la compra");
      };
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        alert('Has realizado la compra con exito')
        let emptycart = [];
        // Aquí hay que agregar objeto con artículos comprados + user
        localStorage.setItem('cartlist', JSON.stringify(emptycart));
      }

      form.classList.add('was-validated')
    }, false)
  })
})()