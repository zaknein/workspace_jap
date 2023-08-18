/*Script para realizar un Registro en vivo*/
const bttn = document.getElementById("sign-in-btn");
/*Variables para almacenar los datos de los usuarios*/
let num_id = 1
const basenombres = []
const basepw = []
let validacion = false
/*Extraccion de variables del html*/
const nombreusuario = document.getElementById("username");
const nombrecompleto = document.getElementById("name-lastname");
const email = document.getElementById("floatingInput");
const pass1 = document.getElementById("floatingPassword");
const pass2 = document.getElementById("floatingPassword2");
const mensaje = document.getElementById("mensaje");
const chkbox = document.getElementById("terms");

function registrandose() {
    mensaje.innerHTML = ""; // Limpiar el mensaje previo

    if (
        nombreusuario.value.length >= 5 &&
        nombrecompleto.value.length >= 5 &&
        email.value.length > 0 &&
        pass1.value.length >= 6 &&
        pass1.value === pass2.value &&
        chkbox.checked
    ) {
        mensaje.innerHTML = "¡Todo correcto!";
        validacion = true;
    } else {
        if (nombreusuario.value.length < 5) {
            mensaje.innerHTML = "Su nombre de usuario debe ser de al menos 5 caracteres";
        } else if (nombrecompleto.value.length < 5) {
            mensaje.innerHTML = "Su nombre completo debe ser de al menos 5 caracteres";
        } else if (email.value.length === 0) {
            mensaje.innerHTML = "Por favor ingrese su correo electrónico";
        } else if (pass1.value.length < 6) {
            mensaje.innerHTML = "La contraseña debe contener al menos 6 caracteres";
        } else if (pass1.value !== pass2.value) {
            mensaje.innerHTML = "Las contraseñas deben coincidir";
        } else if (!chkbox.checked) {
            mensaje.innerHTML = "Debe aceptar los términos y condiciones para registrarse";
        }
    }
}


document.addEventListener("DOMContentLoaded", function(e) {
    /*Función de chequeo de datos previos al registro*/
    nombreusuario.addEventListener("input", registrandose);
    nombrecompleto.addEventListener("input", registrandose);
    email.addEventListener("input", registrandose);
    pass1.addEventListener("input", registrandose);
    pass2.addEventListener("input", registrandose);
    chkbox.addEventListener("change", registrandose);
});

/*Ingreso de datos a la DataBase*/
bttn.addEventListener("click",function(e){
    registrandose();
    if (validacion === true){

        basenombres.push({nombre_de_usuario: nombreusuario.value, numero_id: num_id});
        basepw.push({contrasena:pass1.value, numero_id:num_id});
        num_id++;
        let nombreusuariocookie = nombrecompleto.value;
        document.cookie = `basenombres=${JSON.stringify(basenombres)}; path=/`;
        document.cookie = `basepw=${JSON.stringify(basepw)}; path=/`;
        document.cookie = `nombrecompleto=${nombreusuariocookie}; path=/`;
        mensaje.innerHTML = "¡Has sido registrado con exito!";

        setTimeout(function(e){
            window.location = "login.html"},2500);
    } else {
        alert("Debes completar todos los campos para registrarte");
    }
})