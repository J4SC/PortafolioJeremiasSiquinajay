// Función que aplica el estilo a la opción seleccionada y quita el estilo de las opciones previamente seleccionadas
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(opcion => opcion.classList.remove("seleccionado"));
    link.classList.add("seleccionado");

    // Hacer desaparecer el menú una vez que se ha seleccionado una opción en modo responsive
    var nav = document.getElementById("nav");
    nav.className = "";
}

// Función que muestra el menú responsive
function responsiveMenu() {
    var nav = document.getElementById("nav");
    nav.className = nav.className === "" ? "responsive" : "";
}

// Función que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("lenguje1").classList.add("barra-progreso1");
        document.getElementById("lenguje2").classList.add("barra-progreso2");
        document.getElementById("lenguje3").classList.add("barra-progreso3");
        document.getElementById("lenguje4").classList.add("barra-progreso4");
        document.getElementById("lenguje5").classList.add("barra-progreso5");
        document.getElementById("lenguje6").classList.add("barra-progreso6");
        document.getElementById("lenguje7").classList.add("barra-progreso7");
    }
}

// Evento para detectar el scrolling
window.onscroll = function() {
    efectoHabilidades();
};

// Evento para el DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el elemento con id "mensaje"
    const mensajeElemento = document.querySelector("#mensaje");
    
    // Agregar evento click
    mensajeElemento.addEventListener("click", function(event) {
        // Prevenir el comportamiento por defecto del enlace
        event.preventDefault();
        alert("Aún no disponible");
    });
});
