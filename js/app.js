// Instanciamos la base de datos
const bd = new BaseDeDatos();

// Elementos
const spanCantidadProductos = document.querySelector("#cantidadProductos");
const spanTotalCarrito = document.querySelector("#totalCarrito");
const divProductos = document.querySelector("#productos");
const divCarrito = document.querySelector("#carrito");
const inputBuscar = document.querySelector("#inputBuscar");
const botonCarrito = document.querySelector("section h1");

// Instaciamos la clase Carrito
const carrito = new Carrito();

// Mostramos el catálogo de la base de datos apenas carga la página
cargarProductos(bd.traerRegistros());

// Función para mostrar para renderizar productos del catálogo o buscador
function cargarProductos(productos) {
    // Vacíamos el div
    divProductos.innerHTML = "";
    // Recorremos producto por producto y lo dibujamos en el HTML
    for (const producto of productos) {
        divProductos.innerHTML += `



                <div class="card " style="width: 18rem;">
                    <img src="${producto.imagen}" class="card-img-top"  alt="${producto.nombre}>
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="precio">$${producto.precio}</p>
                        <a href="#" class="btnAgregar btn btn-primary" data-id="${producto.id}">Agregar al carrito</a>
                    </div>
                </div>

            `;
    }

    // Lista dinámica con todos los botones que haya en nuestro catálogo
    const botonesAgregar = document.querySelectorAll(".btnAgregar");

    // Recorremos botón por botón de cada producto en el catálogo y le agregamos
    // el evento click a cada uno
    for (const boton of botonesAgregar) {
        boton.addEventListener("click", (event) => {
            // Evita el comportamiento default de HTML
            event.preventDefault();
            // Guardo el dataset ID que está en el HTML del botón Agregar al carrito
            const idProducto = Number(boton.dataset.id);
            // Uso el método de la base de datos para ubicar el producto según el ID
            const producto = bd.registroPorId(idProducto);
            // Llama al método agregar del carrito
            carrito.agregar(producto);
        });
    }
}

// Buscador
inputBuscar.addEventListener("input", (event) => {
    event.preventDefault();
    const palabra = inputBuscar.value;
    const productos = bd.registrosPorNombre(palabra);
    cargarProductos(productos);
});

//Para mostrar todo el catalogo
// Obtén una referencia al botón y al div "productos"
const btnMostrarCatalogo = document.querySelector("#btnMostrarCatalogo");

// Agrega un evento de clic al botón
btnMostrarCatalogo.addEventListener("click", () => {
    // Cambia el estilo de visualización del div "productos"
    divProductos.style.display = "grid";
});

// Obtén una referencia al enlace "Ver promociones"
const enlacePromociones = document.getElementById("promocionesBancarias");

// Obtén una referencia al ventana y al botón de cerrar
const ventana = document.getElementById("ventana");
const cerrarVentana = document.getElementById("cerrarVentana");

// Abre el ventana cuando se hace clic en "Ver promociones"
enlacePromociones.addEventListener("click", () => {
    ventana.style.display = "block";
});

// Cierra el ventana cuando se hace clic en el botón de cerrar
cerrarVentana.addEventListener("click", () => {
    ventana.style.display = "none";
});
