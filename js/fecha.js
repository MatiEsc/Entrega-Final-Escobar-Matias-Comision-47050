// Importa la clase DateTime de Luxon
const { DateTime } = luxon;

// Obtiene la fecha actual
const now = DateTime.now();

// Muestra la fecha en un elemento HTML con el id "fechaActual"
const fechaActualElement = document.getElementById("fechaActual");
fechaActualElement.textContent = now.toLocaleString({
    day: "numeric",
    month: "long",
    year: "numeric",
});
