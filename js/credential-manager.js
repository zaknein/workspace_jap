// Traemos los botones del bloque animado
const btnLogin2 = document.getElementById("loginbtnContainerCM")
const btnRegister = document.getElementById("registerbtnContainerCM")
const animatedDiv = document.getElementById("layerTwoCredMan")
const title = document.getElementById("credentialsDivTitle")
const text = document.getElementById("credentialsDivText")
const message = document.getElementById('message');
// Traemos los botones del bloque animado

btnLogin2.disabled = true; // Inhabilitamos el botón de Login ya que la página parte mostrando el Login
// Si se apreta el botón de Registro, el bloque animado se mueve tapando el Login y descubriendo el SignUp
btnRegister.addEventListener("click", function(e){
    if(!btnRegister.disabled){
        btnRegister.disabled = true; // Se inhabilita el botón de Registro
        btnLogin2.disabled = false; // Se habilita el botón de Login
        animatedDiv.style.translate = "-850px";
        title.classList.add('fade-out');
        setTimeout(() => { // El contenido del bloque cambia
            title.innerHTML = "Registro";
            title.classList.remove('fade-out');
            message.classList.remove('fade-out');
        }, 1000);
        text.classList.add('fade-out');
        setTimeout(() => { // El contenido del bloque vuelve a aparecer
            text.innerHTML = "¡Bienvenido! <br>Por favor ingresa tus datos, <br>para registrarte.";  
            text.classList.remove('fade-out');
        }, 1000);
        
        
    }else{
        btnRegister.disabled = false; 
    }
});
// Si se apreta el botón de Registro, el bloque animado se mueve tapando el Login y descubriendo el SignUp
// Si se apreta el botón de Login, el bloque animado se mueve tapando el SignUp y descubre el Login
btnLogin2.addEventListener("click", function(e){
    if(!btnLogin2.disabled){
        btnRegister.disabled = false; // Se habilita el botón de SignUp
        animatedDiv.style.translate = "0px";
        btnLogin2.disabled = true; // Se inhabilita el botón de Login
        title.innerHTML = "Registro"
        title.classList.add('fade-out');
        message.classList.add('fade-out');
        setTimeout(() => { // Cambia el contenido de texto del bloque
            title.innerHTML = "Login";
            title.classList.remove('fade-out');            
        }, 1000);
        text.classList.add('fade-out');
        setTimeout(() => { // Vuelve a aparecer el mensaje de bienvenida para iniciar sesión
            text.innerHTML = "¡Bienvenido! <br>Nos alegra verte nuevamente, <br>esperamos disfrutes de tus compras el dia de hoy. <br><br>Por favor ingresa tus credenciales <br>para iniciar sesion."; 
            text.classList.remove('fade-out');
        }, 1000);

    }else{
        btnLogin2.disabled = false;

    }
});
// Si se apreta el botón de Login, el bloque animado se mueve tapando el SignUp y descubre el Login
// Aquí se puede cerrar el PopUp de Terms & Conditions si lo clickean en el SignUp
function closePopup() {
    document.getElementById("termsPopup").style.display = "none";
}
// Aquí se puede cerrar el PopUp de Terms & Conditions si lo clickean en el SignUp