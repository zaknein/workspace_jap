// Funcionalidad de mostrar contraseña en el Login / Cambia el tipo de Input para mostrar texto
var mostrarContraseña = document.getElementById("mostrarContraseña");
var contraseña = document.getElementById("floatingPassword");

mostrarContraseña.addEventListener("click", function () {
    if (contraseña.type === "password") {
        contraseña.type = "text";
    } else {
        contraseña.type = "password";
    }
});
// Funcionalidad de mostrar contraseña en el Login / Cambia el tipo de Input para mostrar texto
// Se obtienen los campos del formulario de inicio de sesión
const BUTTON = document.getElementById("log-in-btn")
const EMAIL = document.getElementById("email");
const PASSWORD = document.getElementById("floatingPassword");
let logued_in = false // Se declara variable de Logued-In para exportarla al LocalStorage
// Se obtienen los campos del formulario de inicio de sesión
// Función Submit de los campos de inicio de sesión
BUTTON.addEventListener("click", function (e) {
    // Se traen datos (si hay) del localstorage
    let database = JSON.parse(localStorage.getItem("DataBase")) || [];
    let passwordbase = JSON.parse(localStorage.getItem("PasswordBase")) || [];
    let matching = false; // variable que declara la existencia de las credenciales en la base de datos
    // Se crea un objeto con las credenciales que utilizó el usuario
    const login_credentials = {
        email: EMAIL.value,
        password: PASSWORD.value
    };
    // Se verifica que los campos no esten vacíos 
    if (database.length == 0 && passwordbase.length == 0) {
        alert("Si aún no tienes una cuenta, por favor regístrate")
    } // Se iteran las bases de datos buscando coincidencias
    else if ((EMAIL.value.length > 0) && (PASSWORD.value.length >= 6)) {
        for (let i = 0; i < database.length; i++) {
            if (database[i].email_usuario == login_credentials.email) {
                if ((database[i].email_id == passwordbase[i].email_id) && (passwordbase[i].contrasena == login_credentials.password)) {
                    matching = true; // Se verifica la igualdad de credenciales
                    login_credentials.username = database[i].username; // Se agrega al objeto el UserName
                    login_credentials.fullname = database[i].fullname; // Se agrega al objeto el Nombre Completo

                }
            }
        }
    }
    // Si las credenciales coinciden, mandamos datos de importancia al LocalStorage para uso posterior
    if (matching) {
        logued_in = true;
        // Se guarda variable Logued In y el Email del usuario.
        localStorage.setItem("loguedIn", true);
        localStorage.setItem("Email", login_credentials.email);
        // Se guardan las variables del Username && Fullname
        localStorage.setItem("username", login_credentials.username)
        localStorage.setItem("fullname", login_credentials.fullname)
        setTimeout(function () {
            top.window.location = "index.html"
        }, 2000);
    } else {
        alert('Sus credenciales no son correctas, pruebe nuevamente')
    }

});
