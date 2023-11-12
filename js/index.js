// Funcionamiento de la Galería - Asigna CatID a cada una de las cartas
const GALLERYMSG = document.getElementById('gallery-message');
 const msgcatautos = document.getElementById('msg-autos');
 const msgcatjuguetes = document.getElementById('msg-juguetes');
 const msgcatmuebles = document.getElementById('msg-muebles');
 const msgcatherramientas = document.getElementById('msg-herramientas');
 const msgcattecnologia = document.getElementById('msg-tecnologia');
 const msgcatvestimenta = document.getElementById('msg-vestimenta');
 const msgcatelectrodomesticos = document.getElementById('msg-electrodomesticos');
 const msgcatdeportes = document.getElementById('msg-deportes');
 const msgcatcelulares = document.getElementById('msg-celulares');

function PreventMessage() {
    if (GALLERYMSG.innerHTML !== "¡Selecciona una de las categorías!"){
        return true;
    } else {
        return false;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("gallery-container").addEventListener("mouseleave", function () {
        GALLERYMSG.style.display = 'block';
        msgcatautos.style.display = 'none';
        msgcatjuguetes.style.display = 'none';
        msgcatmuebles.style.display = 'none';
        msgcatherramientas.style.display = 'none';
        msgcattecnologia.style.display = 'none';
        msgcatvestimenta.style.display = 'none';
        msgcatelectrodomesticos.style.display = 'none';
        msgcatdeportes.style.display = 'none';
        msgcatcelulares.style.display = 'none';
        
    })
    // Tarjeta de Autos - Interacciones con el cliente
    document.getElementById("cars").addEventListener("click", function () {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("cars").addEventListener("mouseenter", function () {
        GALLERYMSG.style.display = 'none';
        msgcatautos.style.display = 'block';
        msgcatjuguetes.style.display = 'none';
        msgcatmuebles.style.display = 'none';
        msgcatherramientas.style.display = 'none';
        msgcattecnologia.style.display = 'none';
        msgcatvestimenta.style.display = 'none';
        msgcatelectrodomesticos.style.display = 'none';
        msgcatdeportes.style.display = 'none';
        msgcatcelulares.style.display = 'none';
    });
    // Tarjeta de Autos - Interacciones con el cliente
    // Tarjeta de Juguetes - Interacciones con el cliente
    document.getElementById("toys").addEventListener("click", function () {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("toys").addEventListener("mouseenter", function () {
        GALLERYMSG.style.display = 'none';
        msgcatautos.style.display = 'none';
        msgcatjuguetes.style.display = 'block';
        msgcatmuebles.style.display = 'none';
        msgcatherramientas.style.display = 'none';
        msgcattecnologia.style.display = 'none';
        msgcatvestimenta.style.display = 'none';
        msgcatelectrodomesticos.style.display = 'none';
        msgcatdeportes.style.display = 'none';
        msgcatcelulares.style.display = 'none';
    });
    // Tarjeta de Juguetes - Interacciones con el cliente
    // Tarjeta de Muebles - Interacciones con el cliente
    document.getElementById("furniture").addEventListener("click", function () {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
    document.getElementById("furniture").addEventListener("mouseenter", function () {
        GALLERYMSG.style.display = 'none';
        msgcatautos.style.display = 'none';
        msgcatjuguetes.style.display = 'block';
        msgcatmuebles.style.display = 'none';
        msgcatherramientas.style.display = 'none';
        msgcattecnologia.style.display = 'none';
        msgcatvestimenta.style.display = 'none';
        msgcatelectrodomesticos.style.display = 'none';
        msgcatdeportes.style.display = 'none';
        msgcatcelulares.style.display = 'none';
    });
    // Tarjeta de Muebles - Interacciones con el cliente
    // Tarjeta de Herramientas - Interacciones con el cliente
    document.getElementById("tools").addEventListener("click", function () {
        localStorage.setItem("catID", 104);
        window.location = "products.html"
    });
    document.getElementById("tools").addEventListener("mouseenter", function () {
        GALLERYMSG.style.display = 'none';
        msgcatautos.style.display = 'none';
        msgcatjuguetes.style.display = 'none';
        msgcatmuebles.style.display = 'none';
        msgcatherramientas.style.display = 'block';
        msgcattecnologia.style.display = 'none';
        msgcatvestimenta.style.display = 'none';
        msgcatelectrodomesticos.style.display = 'none';
        msgcatdeportes.style.display = 'none';
        msgcatcelulares.style.display = 'none';
    });

    // Tarjeta de Herramientas - Interacciones con el cliente
    // Tarjeta de Computadoras - Interacciones con el cliente
    document.getElementById("computers").addEventListener("click", function () {
        localStorage.setItem("catID", 105);
        window.location = "products.html"
    });
    document.getElementById("computers").addEventListener("mouseenter", function () {
        GALLERYMSG.style.display = 'none';
        msgcatautos.style.display = 'none';
        msgcatjuguetes.style.display = 'none';
        msgcatmuebles.style.display = 'none';
        msgcatherramientas.style.display = 'none';
        msgcattecnologia.style.display = 'block';
        msgcatvestimenta.style.display = 'none';
        msgcatelectrodomesticos.style.display = 'none';
        msgcatdeportes.style.display = 'none';
        msgcatcelulares.style.display = 'none';
    });

    // Tarjeta de Ropas - Interacciones con el cliente
    document.getElementById("clothes").addEventListener("click", function () {
        localStorage.setItem("catID", 106);
        window.location = "products.html"
    });
    document.getElementById("clothes").addEventListener("mouseenter", function () {
        GALLERYMSG.style.display = 'none';
        msgcatautos.style.display = 'none';
        msgcatjuguetes.style.display = 'none';
        msgcatmuebles.style.display = 'none';
        msgcatherramientas.style.display = 'none';
        msgcattecnologia.style.display = 'none';
        msgcatvestimenta.style.display = 'block';
        msgcatelectrodomesticos.style.display = 'none';
        msgcatdeportes.style.display = 'none';
        msgcatcelulares.style.display = 'none';
    });

    // Tarjeta de Ropas - Interacciones con el cliente
    // Tarjeta de Electrodomesticos - Interacciones con el cliente
    document.getElementById("electrodomestics").addEventListener("click", function () {
        localStorage.setItem("catID", 107);
        window.location = "products.html"
    });
    document.getElementById("electrodomestics").addEventListener("mouseenter", function () {
        GALLERYMSG.style.display = 'none';
        msgcatautos.style.display = 'none';
        msgcatjuguetes.style.display = 'none';
        msgcatmuebles.style.display = 'none';
        msgcatherramientas.style.display = 'none';
        msgcattecnologia.style.display = 'none';
        msgcatvestimenta.style.display = 'none';
        msgcatelectrodomesticos.style.display = 'block';
        msgcatdeportes.style.display = 'none';
        msgcatcelulares.style.display = 'none';
    });

    // Tarjeta de Electrodomesticos - Interacciones con el cliente
    // Tarjeta de Deportes - Interacciones con el cliente
    document.getElementById("sports").addEventListener("click", function () {
        localStorage.setItem("catID", 108);
        window.location = "products.html"
    });
    document.getElementById("sports").addEventListener("mouseenter", function () {
        GALLERYMSG.style.display = 'none';
        msgcatautos.style.display = 'none';
        msgcatjuguetes.style.display = 'none';
        msgcatmuebles.style.display = 'none';
        msgcatherramientas.style.display = 'none';
        msgcattecnologia.style.display = 'none';
        msgcatvestimenta.style.display = 'none';
        msgcatelectrodomesticos.style.display = 'none';
        msgcatdeportes.style.display = 'block';
        msgcatcelulares.style.display = 'none';
    });

    // Tarjeta de Deportes - Interacciones con el cliente
    // Tarjeta de Celulares - Interacciones con el cliente
    document.getElementById("cellphones").addEventListener("click", function () {
        localStorage.setItem("catID", 109);
        window.location = "products.html"
    });
    document.getElementById("cellphones").addEventListener("mouseenter", function () {
        GALLERYMSG.style.display = 'none';
        msgcatautos.style.display = 'none';
        msgcatjuguetes.style.display = 'none';
        msgcatmuebles.style.display = 'none';
        msgcatherramientas.style.display = 'none';
        msgcattecnologia.style.display = 'none';
        msgcatvestimenta.style.display = 'none';
        msgcatelectrodomesticos.style.display = 'none';
        msgcatdeportes.style.display = 'none';
        msgcatcelulares.style.display = 'block';
    });
    // Tarjeta de Celulares - Interacciones con el cliente
});
// Funcionamiento de la Galería - Asigna CatID a cada una de las cartas
// Funcionamiento de botón 'A comprar' - desbloquea contenido principal
const button = document.getElementById("btn-presentation");
const displaydestacados = document.getElementById("main-display");

button.addEventListener("click", function (e) {
    displaydestacados.style.display = "block";
    this.classList.add("fade-out")
    setTimeout(() => {
        this.classList.add("displayNone")
    }, 1000);
})
// Funcionamiento de botón 'A comprar' - desbloquea contenido principal
// Funcionamiento de 'No volver a mostrar' en Pop Up de presentación de la página
document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.getElementById("button-close");
    const noMostrarCheckbox = document.getElementById("no-mostrar");

    // Función para cerrar el popup
    function closePopup() {
        termsPopup.style.display = "none";

        // Guardar la preferencia del usuario si marca "No volver a mostrar"
        if (noMostrarCheckbox.checked) {
            document.cookie = "mostrarPopup=0; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        }
    }

    // Mostrar el popup si la cookie 'mostrarPopup' no está configurada
    if (document.cookie.indexOf("mostrarPopup=0") === -1) {
        termsPopup.style.display = "block";
    }

    // Cerrar el popup al hacer clic en el botón "Cerrar"
    closeButton.addEventListener("click", closePopup);
});
// Funcionamiento de 'No volver a mostrar' en Pop Up de presentación de la página

