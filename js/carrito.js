// Clase carrito que nos sirve para manipular los productos de nuestro carrito
class Carrito {
    constructor() {
        // Storage
        const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
        // Array donde van a estar almacenados todos los productos del carrito
        this.carrito = carritoStorage || [];
        this.total = 0; // Suma total de los precios de todos los productos
        this.cantidadProductos = 0; // La cantidad de productos que tenemos en el carrito
        // Llamo a listar apenas de instancia el carrito para aplicar lo que
        // hay en el storage (en caso de que haya algo)
        this.listar();
    }

    // Método para saber si el producto ya se encuentra en el carrito
    estaEnCarrito({ id }) {
        return this.carrito.find((producto) => producto.id === id);
    }

    // Agregar al carrito
    agregar(producto) {
        const productoEnCarrito = this.estaEnCarrito(producto);
        // Si no está en el carrito, le mando eun push y le agrego
        // la propiedad "cantidad"
        if (!productoEnCarrito) {
            this.carrito.push({ ...producto, cantidad: 1 });
        } else {
            // De lo contrario, si ya está en el carrito, le sumo en 1 la cantidad
            productoEnCarrito.cantidad++;
        }
        // Actualizo el storage
        localStorage.setItem("carrito", JSON.stringify(this.carrito));
        // Muestro los productos en el HTML
        this.listar();
    }

    // Quitar del carrito
    quitar(id) {
        // Obento el índice de un producto según el ID, porque el
        // método splice requiere el índice
        const indice = this.carrito.findIndex((producto) => producto.id === id);
        // Si la cantidad es mayor a 1, le resto la cantidad en 1
        if (this.carrito[indice].cantidad > 1) {
            this.carrito[indice].cantidad--;
        } else {
            // Y sino, borramos del carrito el producto a quitar
            this.carrito.splice(indice, 1);
        }
        // Actualizo el storage
        localStorage.setItem("carrito", JSON.stringify(this.carrito));
        // Muestro los productos en el HTML
        this.listar();
    }

    // Renderiza todos los productos en el HTML
    listar() {
        // Reiniciamos variables
        this.total = 0;
        this.cantidadProductos = 0;
        divCarrito.innerHTML = "";
        // Recorro producto por producto del carrito, y los dibujo en el HTML
        for (const producto of this.carrito) {
            divCarrito.innerHTML += `
            <div class="productoCarrito">
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <p>$${producto.precio}</p>
                <p>Cantidad: ${producto.cantidad}</p>

                <a href="#" class="btnQuitar" data-id="${producto.id}">Quitar del carrito</a>
            </div>
            `;
            // Actualizamos los totales
            this.total += producto.precio * producto.cantidad;
            this.cantidadProductos += producto.cantidad;
        }
        // Como no se cuantos productos tengo en el carrito, debo
        // asignarle los eventos de forma dinámica a cada uno
        // Primero hago una lista de todos los botones con .querySelectorAll
        const botonesQuitar = document.querySelectorAll(".btnQuitar");
        // Después los recorro uno por uno y les asigno el evento a cada uno
        for (const boton of botonesQuitar) {
            boton.addEventListener("click", (event) => {
                event.preventDefault();
                // Obtengo el id por el dataset (está asignado en this.listar())
                const idProducto = Number(boton.dataset.id);
                // Llamo al método quitar pasándole el ID del producto
                this.quitar(idProducto);
            });
        }
        // Actualizo los contadores del HTML
        spanCantidadProductos.innerText = this.cantidadProductos;
        spanTotalCarrito.innerText = this.total;
    }
}
