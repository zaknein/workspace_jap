var mostrarContraseña = document.getElementById("mostrarContraseña");
var contraseña = document.getElementById("floatingPassword");

mostrarContraseña.addEventListener("click", function () {
    if (contraseña.type === "password") {
        contraseña.type = "text";
    } else {
        contraseña.type = "password";
    }
});

const BUTTON = document.getElementById("log-in-btn")
const EMAIL = document.getElementById("email");
const PASSWORD = document.getElementById("floatingPassword");
let logued_in = false

// Se recuperan las bases de datos del Local Storage


BUTTON.addEventListener("click", function (e) {

    let database = JSON.parse(localStorage.getItem("DataBase")) || [];
    let passwordbase = JSON.parse(localStorage.getItem("PasswordBase")) || [];
    let matching = false;
    const login_credentials = {
        email: EMAIL.value,
        password: PASSWORD.value
    };

    if (database.length == 0 && passwordbase.length == 0) {
        alert("Si aún no tienes una cuenta, por favor regístrate")
    }
    else if ((EMAIL.value.length > 0) && (PASSWORD.value.length >= 6)) {
        for (let i = 0; i < database.length; i++) {
            if (database[i].email_usuario == login_credentials.email) {
                if ((database[i].email_id == passwordbase[i].email_id) && (passwordbase[i].contrasena == login_credentials.password)) {
                    matching = true;
                    login_credentials.username = database[i].username;
                    login_credentials.fullname = database[i].fullname;

                }
            }
        }
    }

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
