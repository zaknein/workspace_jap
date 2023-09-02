const btnLogin2 = document.getElementById("loginbtnContainerCM")
const btnRegister = document.getElementById("registerbtnContainerCM")
const animatedDiv = document.getElementById("layerTwoCredMan")
const title = document.getElementById("credentialsDivTitle")
const text = document.getElementById("credentialsDivText")

btnLogin2.disabled = true;

btnRegister.addEventListener("click", function(e){
    if(!btnRegister.disabled){
        btnRegister.disabled = true;
        btnLogin2.disabled = false;
        animatedDiv.style.translate = "-850px";
        title.classList.add('fade-out');
        setTimeout(() => {
            title.innerHTML = "Registro";
            title.classList.remove('fade-out');
        }, 1000);
        text.classList.add('fade-out');
        setTimeout(() => {
            text.innerHTML = "¡Bienvenido! <br>Por favor ingresa tus datos, <br>para registrarte.";  
            text.classList.remove('fade-out');
        }, 1000);
        
        
    }else{
        btnRegister.disabled = false;
    }
});
btnLogin2.addEventListener("click", function(e){
    if(!btnLogin2.disabled){
        btnRegister.disabled = false;
        animatedDiv.style.translate = "0px";
        btnLogin2.disabled = true;
        title.innerHTML = "Registro"
        title.classList.add('fade-out');
        setTimeout(() => {
            title.innerHTML = "Login";
            title.classList.remove('fade-out');
        }, 1000);
        text.classList.add('fade-out');
        setTimeout(() => {
            text.innerHTML = "¡Bienvenido! <br>Nos alegra verte nuevamente, <br>esperamos disfrutes de tus compras el dia de hoy. <br><br>Por favor ingresa tus credenciales <br>para iniciar sesion."; 
            text.classList.remove('fade-out');
        }, 1000); 
    }else{
        btnLogin2.disabled = false;

    }
});