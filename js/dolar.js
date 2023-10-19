// URL de la API para el dólar oficial y blue de dolarsi.com
const oficialUrl = "https://www.dolarsi.com/api/dolaroficial";
const blueUrl = "https://www.dolarsi.com/api/dolarblue";

// Función para obtener la cotización del dólar oficial
function obtenerDolarOficial() {
    fetch(oficialUrl)
        .then((response) => response.json())
        .then((data) => {
            const compra = data.compra;
            const venta = data.venta;
            console.log(`Cotización del dólar oficial - Compra: ${compra}, Venta: ${venta}`);
        })
        .catch((error) => {
            console.error("Error al obtener la cotización del dólar oficial:", error);
        });
}

// Función para obtener la cotización del dólar blue
function obtenerDolarBlue() {
    fetch(blueUrl)
        .then((response) => response.json())
        .then((data) => {
            const compra = data.compra;
            const venta = data.venta;
            console.log(`Cotización del dólar blue - Compra: ${compra}, Venta: ${venta}`);
        })
        .catch((error) => {
            console.error("Error al obtener la cotización del dólar blue:", error);
        });
}

// Llama a las funciones para obtener las cotizaciones
obtenerDolarOficial();
obtenerDolarBlue();
