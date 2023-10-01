const HOMEBTN = document.getElementById("homeBtn");
const PERSON1BTN = document.getElementById("person1");
const PERSON2BTN = document.getElementById("person2");
const PERSON3BTN = document.getElementById("person3");
const PERSON4BTN = document.getElementById("person4");
const PERSON5BTN = document.getElementById("person5");
const PERSON6BTN = document.getElementById("person6");
const PERSON7BTN = document.getElementById("person7");
const PERSONIMAGE = document.getElementById("personImage");
const INFOCONTAINER = document.getElementById("aboutUsInfoContainer");
const NAMETITLE = document.getElementById("nameH1Title");
const PRESENTATIONPARAGRAPH = document.getElementById("presentationAUP");
const EXPERIENCETITLE = document.getElementById("experienceH2Title");
const STUDIESLIST = document.getElementById("studiesAUP");
const EXPERIENCEPARAGRAPH = document.getElementById("experienceAUP");
const STUDIESTITLE = document.getElementById("studiesH2Title");
const URL = 'json/about-us.json';
let DATOSABOUTUS = [];
const OBJETIVOS = ["Desarrollarnos como profesionales en el desarrollo de paginas web", 
                    "Aprobar el proyecto, hace una fuercita nico!",
                    "Encontrar el One Piece"]

async function fetchData(URL){
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        const data = await response.json();
        DATOSABOUTUS = data.integrantes;
        console.log(DATOSABOUTUS);
    }
    catch (error){
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchData(URL);

function displayData(name){
    for(element of DATOSABOUTUS){
        if(element.nombre === name){
            return element;
        }
    }
}


function displayPerson(name){
    PERSONIMAGE.style.opacity = 0;
    INFOCONTAINER.style.opacity = 0;
    setTimeout(() => {
        NAMETITLE.textContent = displayData(name).nombre;
        EXPERIENCETITLE.textContent = "Experiencia";
        STUDIESTITLE.textContent = "Estudios"
        while (STUDIESLIST.firstChild) {
            STUDIESLIST.removeChild(STUDIESLIST.firstChild);
        }
        PRESENTATIONPARAGRAPH.textContent = displayData(name).descripcion;
        EXPERIENCEPARAGRAPH.textContent = displayData(name).experiencia;
        for (element of displayData(name).estudios){
                const listItem = document.createElement("li");
                listItem.textContent = element;
                STUDIESLIST.appendChild(listItem);
        }
        PERSONIMAGE.src = displayData(name).imagen;  
        PERSONIMAGE.style.height = "80%";
            PERSONIMAGE.style.top = "5%";
            PERSONIMAGE.style.left = "3%";
        PERSONIMAGE.style.opacity = 1;
        INFOCONTAINER.style.opacity = 1;
        }, 500);
}
document.addEventListener("DOMContentLoaded", ()=>{
    HOMEBTN.checked = true;
    if (HOMEBTN.checked) {
        NAMETITLE.textContent = "Nosotros";
        PRESENTATIONPARAGRAPH.textContent = "Somos un grupo de jovenes entusiastas apasionados por el mundo del desarrollo web, ansiosos por adquirir experiencia y contribuir con nuestra creatividad y habilidades tecnicas. Estamos comprometidos a mantener un aprendizaje continuo y crecer en el campo del desarrollo web, con el objetivo de ser parte de una empresa innovadora y colaborativa donde podamos aplicar nuestros conocimientos, para crear soluciones digitales de calidad";
        EXPERIENCETITLE.textContent = "";
        STUDIESTITLE.textContent = "Objetivos"
        for (element of OBJETIVOS){
                const listItem = document.createElement("li");
                listItem.textContent = element;
                STUDIESLIST.appendChild(listItem);
        }
        setTimeout(() => {
            PERSONIMAGE.src = "img/hexagon-shadow.png"
            INFOCONTAINER.style.opacity = 1;
            PERSONIMAGE.style.height = "100%";
            PERSONIMAGE.style.top = "0%";
            PERSONIMAGE.style.left = "0%";
            PERSONIMAGE.style.opacity = 1;
        }, 500);
    }
})
HOMEBTN.addEventListener("change", () => {
    if (HOMEBTN.checked) {
        PERSONIMAGE.style.opacity = 0;
        INFOCONTAINER.style.opacity = 0;
        setTimeout(() => {
        PERSONIMAGE.src = "img/hexagon-shadow.png"
        NAMETITLE.textContent = "Nosotros";
        PRESENTATIONPARAGRAPH.textContent = "Somos un grupo de jovenes entusiastas apasionados por el mundo del desarrollo web, ansiosos por adquirir experiencia y contribuir con nuestra creatividad y habilidades tecnicas. Estamos comprometidos a mantener un aprendizaje continuo y crecer en el campo del desarrollo web, con el objetivo de ser parte de una empresa innovadora y colaborativa donde podamos aplicar nuestros conocimientos, para crear soluciones digitales de calidad";
        EXPERIENCETITLE.textContent = "";
        STUDIESTITLE.textContent = "Objetivos"
        for (element of OBJETIVOS){
                const listItem = document.createElement("li");
                listItem.textContent = element;
                STUDIESLIST.appendChild(listItem);
        }
        
            PERSONIMAGE.style.height = "100%";
            PERSONIMAGE.style.top = "0%";
            PERSONIMAGE.style.left = "0%";
            PERSONIMAGE.style.opacity = 1;
            INFOCONTAINER.style.opacity = 1;
        }, 500);
    }
});

PERSON1BTN.addEventListener("change", () => {
    if (PERSON1BTN.checked) {
        displayPerson("Axel Palombo")
    }
});
PERSON2BTN.addEventListener("change", () => {
    if (PERSON2BTN.checked) {
        displayPerson("Bruno Mendez")
    }
});
PERSON3BTN.addEventListener("change", () => {
    if (PERSON3BTN.checked) {
        displayPerson("Bruno Moreira")
    }
});
PERSON4BTN.addEventListener("change", () => {
    if (PERSON4BTN.checked) {
        displayPerson("Franco Echaide")
    }
});
PERSON5BTN.addEventListener("change", () => {
    if (PERSON5BTN.checked) {
        displayPerson("German Kroger")
    }
});
PERSON6BTN.addEventListener("change", () => {
    if (PERSON6BTN.checked) {
        displayPerson("Ivan Pereira")
    }
});
PERSON7BTN.addEventListener("change", () => {
    if (PERSON7BTN.checked) {
        displayPerson("Rocio De Brun")
    }
});