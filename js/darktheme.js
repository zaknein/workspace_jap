
const root = document.documentElement

/* ============================================== Dark Theme =============================================  */
document.addEventListener("DOMContentLoaded", ()=>{
    let theme = localStorage.getItem('theme');
    if (theme == "light") {
        /* aquí van los estilos del modo claro */
        root.style.setProperty('--coloroscuro', '#b5b5db');
        root.style.setProperty('--backgroundimage1', 'url("../img/bg_img_light.webp")');
      } else if (theme == "dark") {
        /* aquí van los estilos del modo oscuro */
        root.style.setProperty('--coloroscuro', '#22222B');
        root.style.setProperty('--backgroundimage', 'url("../img/bg_img.webp")');
      }
      
})
/* ============================================== Dark Theme =============================================  */
