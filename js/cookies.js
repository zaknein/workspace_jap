let logued_in = false // Se declara la variable que trackea si el usuario está logueado
// Se traen los elementos del HTML
const LOGOUT = document.getElementById("log-out-btn");
const DROPDOWN = document.getElementById('userDropdown')
const LOGIN = document.getElementById('log-in');
// Se traen los elementos del HTML
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
    location.reload();
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
// Función que verifica si el usuario está logueado en la página
document.addEventListener("DOMContentLoaded", function(e) {
    // Obtener variable logued_in almacenada en cookie
    const storedlogued_in = localStorage.getItem("loguedIn");
    if (storedlogued_in) {
        console.log(storedlogued_in);
    } else {
        console.log("No estás logueado");
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
        LOGIN.style.display = "none";
        DROPDOWN.style.display = "block";
        LOGOUT.style.display = "block";
        DROPDOWN.innerHTML = localStorage.getItem('username')
    }
    // Extraemos el valor del Nombre Completo de la Cookie y la insertamos en el HTML
    const storedemail = localStorage.getItem("Email");
    const emailElement = document.getElementById("email");

    if (storedemail) {
        emailElement.innerHTML = storedemail;
        emailElement.href = "my-profile.html"
    } else {
        console.log("No hay información guardada");
    }
});
// Función que verifica si el usuario está logueado en la página
// Cerrar Sesión - Vacía el LocalStorage y vuelve la variable a false
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
// Cerrar Sesión - Vacía el LocalStorage y vuelve la variable a false
LOGOUT.addEventListener("click",logout); // EventListener para cerrar sesión