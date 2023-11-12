const editarBtn = document.getElementById("editarBtn");
const guardarBtn = document.getElementById("guardarBtn");
const telefonoInput = document.querySelector('input[name="telefono_de_contacto"]');
const nombre_usuario = document.querySelector('input[name="nombre_usuario"]');
const nombrecompleto = document.querySelector('input[name="nombre_completo"]');
const segundo_nombre = document.querySelector('input[name="segundo_nombre"]');
const primer_apellido = document.querySelector('input[name="primer_apellido"]');
const email = document.querySelector('input[name="email"]');
const descripcionTextarea = document.getElementById('description');




  editarBtn.addEventListener("click", function() {
    telefonoInput.removeAttribute("disabled");
    nombre_usuario.removeAttribute("disabled");
    nombrecompleto.removeAttribute("disabled");
    email.removeAttribute("disabled");
    descripcionTextarea.removeAttribute("disabled");
    primer_apellido.removeAttribute("disabled");
    segundo_nombre.removeAttribute("disabled");


  });

  guardarBtn.addEventListener("click", function() {
    telefonoInput.setAttribute("disabled", "disabled");
    nombre_usuario.setAttribute("disabled", "disabled");
    nombrecompleto.setAttribute("disabled", "disabled");
    email.setAttribute("disabled", "disabled");
    descripcionTextarea.setAttribute("disabled", "disabled");
    primer_apellido.setAttribute("disabled", "disabled");
    segundo_nombre.setAttribute("disabled", "disabled");


});

const username = localStorage.getItem("username");

if (username !== null) {
    nombre_usuario.value = username;
}

const Email = localStorage.getItem("Email");

if (Email !== null) {
    email.value = Email;
}

const nombreCompleto = document.getElementById('fullname');
const nombreCompletoInput = document.getElementById('nombre_completo');
const fullname = localStorage.getItem('fullname');

if (fullname !== null) {
  nombreCompletoInput.value = fullname;
  nombreCompleto.textContent = fullname;

}








guardarBtn.addEventListener('click', function() {
  //username
  const nuevoNombreUsuario = nombre_usuario.value;
  if (nuevoNombreUsuario.trim() !== '') {
    localStorage.setItem('username', nuevoNombreUsuario);
  } else {
    alert('Por favor, ingresa un nombre de usuario válido.');
  };


  //email
  const nuevoEmail = email.value;
  if (nuevoEmail.trim() !== '') {
    localStorage.setItem('Email', nuevoEmail);
  } else {
    alert('Por favor, ingresa un Email válido.');
  }

  const aboutMeText = descripcionTextarea.value;
  localStorage.setItem('aboutme', aboutMeText);


    const telefonoDeContacto = telefonoInput.value;

  localStorage.setItem('telefono_contacto', telefonoDeContacto);

   const nuevoNombreCompleto = nombrecompleto.value;

   if (nuevoNombreCompleto.trim() !== '') {
     localStorage.setItem('fullname', nuevoNombreCompleto);
   } 
   location.reload();
});

window.addEventListener('load', function() {
  const aboutMeText = localStorage.getItem('aboutme');
  if (aboutMeText) {
    descripcionTextarea.value = aboutMeText;
  }

  const telefonoDeContacto = localStorage.getItem('telefono_contacto');
  if (telefonoDeContacto) {
    telefonoInput.value = telefonoDeContacto;
  }
});


// Foto de Perfil

const editImageLabel = document.getElementById('edit-image-label');
const imageInput = document.getElementById('image-input');
const profileImage = document.getElementById('profile-image');

imageInput.addEventListener('change', function () {
  const imagenseleccionada = imageInput.files[0];
  if (imagenseleccionada) {
    const imageUrl = URL.createObjectURL(imagenseleccionada);
    profileImage.src = imageUrl;

    localStorage.setItem('profile_image', imageUrl);
    console.log('Imagen guardada en el almacenamiento local.');
  }
});

window.addEventListener('load', function () {
  const imagenGuardada = localStorage.getItem('profile_image');
  if (imagenGuardada) {
    profileImage.src = imagenGuardada;
    console.log('Imagen cargada desde el almacenamiento local.');
  }
});


function editLink(element) {
  // Obtener el identificador único del enlace
  const linkId = element.getAttribute("data-link-id");
  
  // Obtener el elemento del enlace usando el identificador
  const linkText = document.getElementById(linkId);
  
  // Solicitar al usuario que ingrese el nuevo enlace mediante un cuadro de diálogo
  const newLink = prompt('Ingresa el nuevo enlace:', linkText.href);
  
  // Verificar si el usuario ingresó una nueva URL
  if (newLink !== null) {
    // Agregar el protocolo si no está presente
    const formattedLink = newLink.startsWith('http://') || newLink.startsWith('https://') ? newLink : 'http://' + newLink;
    
    // Asignar la nueva URL al enlace
    linkText.href = formattedLink;
    
    // Guardar la nueva URL en el almacenamiento local para recordarla después
    localStorage.setItem(linkId, formattedLink);
  }
}

// Obtener todos los botones con el atributo 'data-link-id'
const editButtons = document.querySelectorAll("button[data-link-id]");

// Agregar un evento a cada botón para llamar a la función editLink
editButtons.forEach((button) => {
  button.addEventListener("click", function () {
    editLink(this);
  });
});

// Restaurar las URL almacenadas en el almacenamiento local
for (const linkId of Object.keys(localStorage)) {
  const linkText = document.getElementById(linkId);
  
  // Verificar si el enlace todavía existe en la página
  if (linkText) {
    // Restaurar la URL desde el almacenamiento local
    linkText.href = localStorage.getItem(linkId);
  }
}