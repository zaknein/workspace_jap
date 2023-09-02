// Leer cookies
let logued_in = false
function getCookie(email) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${email}=`);
    if (parts.length === 2){ return parts.pop().split(";").shift();
} else {return null;}
}

// Obtener datos almacenados en cookies

document.addEventListener("DOMContentLoaded", function(e) {
    // Obtener variable logued_in almacenada en cookie
    const storedlogued_in = getCookie("logued_in");
    if (storedlogued_in) {
        console.log(storedlogued_in);
    } else {
        console.log("No ha cargado la cookie");
    }

    logued_in = storedlogued_in === "true"; // Convertir el valor a un booleano
    // Verificar si logued_in es true/false, si es true la pagina permanece, si es false redirecciona a login.html
    if (!logued_in) {
        console.log("No has iniciado sesión en la página, por favor inicia sesión")
        setTimeout(function() {
            alert("Inicia sesión para navegar por la página")
            window.location = "credential-manager.html";
        }, 4000);
    }
    // Extraemos el valor del Nombre Completo de la Cookie y la insertamos en el HTML
    const storedemail = getCookie("email");
    console.log(storedemail);
    const emailElement = document.getElementById("email");

    if (storedemail) {
        emailElement.innerHTML = storedemail;
        emailElement.href = "my-profile.html"
    } else {
        console.log("No se pudo obtener el nombre completo de las cookies");
    }
});