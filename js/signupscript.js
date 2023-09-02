/*Script para realizar un Registro en vivo*/
const BTTN = document.getElementById("sign-in-btn");
/*Variables para almacenar los datos de los usuarios*/
let id_num = 1
const EMAIL_BASE = []
const PASSWORD_BASE = []
let validation = false
/*Extraccion de variables del html*/
const USERNAME = document.getElementById("username");
const FULLNAME = document.getElementById("name-lastname");
const EMAIL = document.getElementById("floatingInput");
const FPASSWORD = document.getElementById("floatingPassword");
const SPASSWORD = document.getElementById("floatingPassword2");
const MESSAGE = document.getElementById("message");
const CHKBOX = document.getElementById("terms");

function signUp() {
    MESSAGE.innerHTML = ""; // Limpiar el mensaje previo

    if (
        USERNAME.value.length >= 5 &&
        FULLNAME.value.length >= 5 &&
        EMAIL.value.length > 0 &&
        FPASSWORD.value.length >= 6 &&
        FPASSWORD.value === SPASSWORD.value &&
        CHKBOX.checked
    ) {
        MESSAGE.innerHTML = "¡Todo correcto!";
        validation = true;
    } else {
        if (USERNAME.value.length < 5) {
            MESSAGE.innerHTML = "Su nombre de usuario debe ser de al menos 5 caracteres";
        } else if (FULLNAME.value.length < 5) {
            MESSAGE.innerHTML = "Su nombre completo debe ser de al menos 5 caracteres";
        } else if (EMAIL.value.length === 0) {
            MESSAGE.innerHTML = "Por favor ingrese su correo electrónico";
        } else if (FPASSWORD.value.length < 6) {
            MESSAGE.innerHTML = "La contraseña debe contener al menos 6 caracteres";
        } else if (FPASSWORD.value !== SPASSWORD.value) {
            MESSAGE.innerHTML = "Las contraseñas deben coincidir";
        } else if (!CHKBOX.checked) {
            MESSAGE.innerHTML = "Debe aceptar los términos y condiciones para registrarse";
        }
    }
}


document.addEventListener("DOMContentLoaded", function(e) {
    /*Función de chequeo de datos previos al registro*/
    USERNAME.addEventListener("input", signUp);
    FULLNAME.addEventListener("input", signUp);
    EMAIL.addEventListener("input", signUp);
    FPASSWORD.addEventListener("input", signUp);
    SPASSWORD.addEventListener("input", signUp);
    CHKBOX.addEventListener("change", signUp);
});

/*Ingreso de datos a la DataBase*/
BTTN.addEventListener("click",function(e){
    signUp();
    if (validation === true){

        EMAIL_BASE.push({email_usuario: EMAIL.value, email_id: id_num});
        PASSWORD_BASE.push({contrasena:FPASSWORD.value, email_id:id_num});
        id_num++;
        let emailcookie = EMAIL.value;
        document.cookie = `EMAIL_BASE=${JSON.stringify(EMAIL_BASE)}; path=/`;
        document.cookie = `PASSWORD_BASE=${JSON.stringify(PASSWORD_BASE)}; path=/`;
        document.cookie = `email=${emailcookie}; path=/`;
        MESSAGE.innerHTML = "¡Has sido registrado con exito!";

        setTimeout(function(e){
         top.window.location = "credential-manager.html"},1000);
    } else {
        alert("Debes completar todos los campos para registrarte");
    }
})