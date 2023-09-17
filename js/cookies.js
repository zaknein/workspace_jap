// Leer cookies
let logued_in = false
const LOGOUT = document.getElementById("log-out-btn");

document.addEventListener("DOMContentLoaded", function(e) {
    // Obtener variable logued_in almacenada en cookie
    const storedlogued_in = localStorage.getItem("loguedIn");
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
    } else {
        LOGOUT.style.display = "block";
    }
    // Extraemos el valor del Nombre Completo de la Cookie y la insertamos en el HTML
    const storedemail = localStorage.getItem("Email");
    console.log(storedemail);
    const emailElement = document.getElementById("email");

    if (storedemail) {
        emailElement.innerHTML = storedemail;
        emailElement.href = "my-profile.html"
    } else {
        console.log("No se pudo obtener el nombre completo de las cookies");
    }
});

function logout(){
    logued_in = false;
    localStorage.removeItem("loguedIn");
    localStorage.removeItem("Email");
    localStorage.removeItem("username");
    localStorage.removeItem("fullname");
    setTimeout( () =>{
    window.location.reload()
    ,1500});
}
LOGOUT.addEventListener("click",logout);