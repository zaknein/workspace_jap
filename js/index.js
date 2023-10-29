// Funcionamiento de la Galería - Asigna CatID a cada una de las cartas
const GALLERYMSG = document.getElementById('gallery-message');
function PreventMessage() {
    if (GALLERYMSG.innerHTML !== "¡Selecciona una de las categorías!"){
        return true;
    } else {
        return false;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("gallery-container").addEventListener("mouseleave", function () {
        setTimeout( () => {
            GALLERYMSG.innerHTML = "¡Selecciona una de las categorías!"
        },
        400)
        
    })
    // Tarjeta de Autos - Interacciones con el cliente
    document.getElementById("cars").addEventListener("click", function () {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("cars").addEventListener("mouseenter", function () {
        setTimeout(() => {
            GALLERYMSG.innerHTML = "Los vehículos más rápidos";
        }, 1000);
    })
    document.getElementById("cars").addEventListener("mouseleave", function (e) {
        if (!PreventMessage()){
            return;
        };
        GALLERYMSG.classList.add('fade-out');
        setTimeout(() => {
            
            GALLERYMSG.classList.remove('fade-out')
        },
            1000)
    });
    // Tarjeta de Autos - Interacciones con el cliente
    // Tarjeta de Juguetes - Interacciones con el cliente
    document.getElementById("toys").addEventListener("click", function () {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("toys").addEventListener("mouseenter", function () {
        setTimeout(() => {
            GALLERYMSG.innerHTML = "¡Jugarás por horas!";
        }, 1000);
    });
    document.getElementById("toys").addEventListener("mouseleave", function () {
        if (!PreventMessage()){
            return;
        };
        GALLERYMSG.classList.add('fade-out');
        setTimeout(() => {
            
            GALLERYMSG.classList.remove('fade-out')
        },
            1000)
    });
    // Tarjeta de Juguetes - Interacciones con el cliente
    // Tarjeta de Muebles - Interacciones con el cliente
    document.getElementById("furniture").addEventListener("click", function () {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
    document.getElementById("furniture").addEventListener("mouseenter", function () {
        setTimeout(() => {
            GALLERYMSG.innerHTML = "Construye tu hogar";
        }, 1000);
        
    });
    document.getElementById("furniture").addEventListener("mouseleave", function () {
        if (!PreventMessage()){
            return;
        };
        GALLERYMSG.classList.add('fade-out');
        setTimeout(() => {
            
            GALLERYMSG.classList.remove('fade-out')
        },
            1000)
    });
    // Tarjeta de Muebles - Interacciones con el cliente
    // Tarjeta de Herramientas - Interacciones con el cliente
    document.getElementById("tools").addEventListener("click", function () {
        localStorage.setItem("catID", 104);
        window.location = "products.html"
    });
    document.getElementById("tools").addEventListener("mouseenter", function () {
        
        setTimeout(() => {
            GALLERYMSG.innerHTML = "¡Los mejores amigos para reparar un corazón roto!";
        }, 1000);
    });
    document.getElementById("tools").addEventListener("mouseleave", function () {
        if (!PreventMessage()){
            return;
        };
        GALLERYMSG.classList.add('fade-out');
        setTimeout(() => {
            
            GALLERYMSG.classList.remove('fade-out')
        },
            1000)
    });
    // Tarjeta de Herramientas - Interacciones con el cliente
    // Tarjeta de Computadoras - Interacciones con el cliente
    document.getElementById("computers").addEventListener("click", function () {
        localStorage.setItem("catID", 105);
        window.location = "products.html"
    });
    document.getElementById("computers").addEventListener("mouseenter", function () {
        setTimeout(() => {
            GALLERYMSG.innerHTML = "Computadoras de última tecnología";
        }, 1000);
        
    });
    document.getElementById("computers").addEventListener("mouseleave", function () {
        if (!PreventMessage()){
            return;
        };
        GALLERYMSG.classList.add('fade-out');
        setTimeout(() => {
            
            GALLERYMSG.classList.remove('fade-out')
        },
            1000)
    })
    // Tarjeta de Ropas - Interacciones con el cliente
    document.getElementById("clothes").addEventListener("click", function () {
        localStorage.setItem("catID", 106);
        window.location = "products.html"
    });
    document.getElementById("clothes").addEventListener("mouseenter", function () {
        setTimeout(() => {
            GALLERYMSG.innerHTML = "¡La moda directo hacia ti!";
        }, 1000);
        
    })
    document.getElementById("clothes").addEventListener("mouseleave", function () {
        if (!PreventMessage()){
            return;
        };
        GALLERYMSG.classList.add('fade-out');
        setTimeout(() => {
            
            GALLERYMSG.classList.remove('fade-out')
        },
            1000)
    });
    // Tarjeta de Ropas - Interacciones con el cliente
    // Tarjeta de Electrodomesticos - Interacciones con el cliente
    document.getElementById("electrodomestics").addEventListener("click", function () {
        localStorage.setItem("catID", 107);
        window.location = "products.html"
    });
    document.getElementById("electrodomestics").addEventListener("mouseenter", function () {
        setTimeout(() => {
            GALLERYMSG.innerHTML = "¡Las mejores comodidades para tu hogar!";
        }, 1000);
        
    });
    document.getElementById("electrodomestics").addEventListener("mouseleave", function () {
        if (!PreventMessage()){
            return;
        };
        GALLERYMSG.classList.add('fade-out');
        setTimeout(() => {
            
            GALLERYMSG.classList.remove('fade-out')
        },
            1000)
    });
    // Tarjeta de Electrodomesticos - Interacciones con el cliente
    // Tarjeta de Deportes - Interacciones con el cliente
    document.getElementById("sports").addEventListener("click", function () {
        localStorage.setItem("catID", 108);
        window.location = "products.html"
    });
    document.getElementById("sports").addEventListener("mouseenter", function () {
        setTimeout(() => {
            GALLERYMSG.innerHTML = "¡Compite con los mejores, hombro a hombro!";
        }, 1000);
        
    });
    document.getElementById("sports").addEventListener("mouseleave", function () {
        if (!PreventMessage()){
            return;
        };
        GALLERYMSG.classList.add('fade-out');
        setTimeout(() => {
            
            GALLERYMSG.classList.remove('fade-out')
        },
            1000)
    });
    // Tarjeta de Deportes - Interacciones con el cliente
    // Tarjeta de Celulares - Interacciones con el cliente
    document.getElementById("cellphones").addEventListener("click", function () {
        localStorage.setItem("catID", 109);
        window.location = "products.html"
    });
    document.getElementById("cellphones").addEventListener("mouseenter", function () {
        setTimeout(() => {
            GALLERYMSG.innerHTML = "¡Conéctate a la red! ¡Comunicáte con quien quieras!";
        }, 1000);
        
    });
    document.getElementById("cellphones").addEventListener("mouseleave", function () {
        if (!PreventMessage()){
            return;
        };
        GALLERYMSG.classList.add('fade-out');
        setTimeout(() => {
            
            GALLERYMSG.classList.remove('fade-out')
        },
            1000)
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
// Setter de tema // Cambia las variables en el Root según el tema preferido
const DARKMODE = document.getElementById('toggle');
DARKMODE.addEventListener('change', (e) => {
    const DARKMODE = document.getElementById('toggle');
    if (DARKMODE.checked) {
        /* aqui van los estilos del modo claro */
        localStorage.setItem('theme', "light");
        root.style.setProperty('--coloroscuro', '#b5b5db');
        root.style.setProperty('--backgroundimage', 'url("../img/bg_img_light.webp")');
    } else {
        localStorage.setItem('theme', "dark");
        root.style.setProperty('--coloroscuro', '#22222B');
        root.style.setProperty('--backgroundimage', 'url("../img/bg_img.webp")');

    }
})

document.addEventListener("DOMContentLoaded", () => {
    let theme = localStorage.getItem('theme');
    if (theme == "light") {
        DARKMODE.checked = true;
    } else if (theme == "dark") {
        DARKMODE.checked = false;
    }
})
// Setter de tema // Cambia las variables en el Root según el tema preferido
