// Clase "molde" para los productos de nuestra aplicación
class Producto {
    constructor(id, nombre, descripcion, precio, categoria, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
    }
}

// Clase para que simula la base de datos del e-commerce, acá van a estar
// todos los productos de nuestro catálogo
class BaseDeDatos {
    constructor() {
        // Array para el catálogo
        this.productos = [];
        // Empezar a cargar productos
        //Notebook
        this.agregarRegistro(
            101,
            "Lenovo",
            "Notebook Lenovo 14” Celeron 4GB 500GB IdeaPad 3 81WH0015AR.",
            199999,
            "notebook",
            "imagenes/notebook/lenovo.webp"
        );
        this.agregarRegistro(
            102,
            "HP",
            "Notebook HP 15.6” Intel Core i5 10 Núcleos 8GB RAM 512GB SSD- DY5001LA.",
            199999,
            "notebook",
            "imagenes/notebook/notebook-hp.webp"
        );
        this.agregarRegistro(
            103,
            "Acer",
            "Notebook Acer 15,6” Intel Core i5 12 Núcleos 8GB 512GB SSD Nitro 5 Placa.",
            729999,
            "notebook",
            "imagenes/notebook/notebook-acer.webp"
        );
        this.agregarRegistro(
            104,
            "Samsung",
            "Notebook Samsung 16” Intel Core i7 12 Núcleos 512GB 16GB Galaxy Book3 Pro 360 NP960QFG-KA1A.",
            1244999,
            "notebook",
            "imagenes/notebook/notebook-samsung.webp"
        );
        this.agregarRegistro(
            105,
            "Dell",
            "Notebook DELL 15.6” Ryzen 5 8GB 256GB SSD INSP3525 2DJ8R.",
            479999,
            "notebook",
            "imagenes/notebook/notebook-dell.webp"
        );
        this.agregarRegistro(
            106,
            "Asus",
            "Notebook Asus 15,6” Intel Core i5 12 Núcleos 8GB 256GB SSD X1502ZA-EJ294W.",
            489999,
            "notebook",
            "imagenes/notebook/notebook-asus.webp"
        );
        this.agregarRegistro(
            107,
            "Apple",
            "Apple - MacBook Air 13” M1 Chip 8-core CPU 7-core GPU 256GB Silver.",
            1349900,
            "notebook",
            "imagenes/notebook/notebook-apple.webp"
        );
        this.agregarRegistro(
            108,
            "Bangho",
            "Notebook Banghó Bes X4 Core I7 8GB 480GB 14” FHD Windows 11 Home + Office.",
            1244999,
            "notebook",
            "imagenes/notebook/notebook-bangho.webp"
        );
        this.agregarRegistro(
            109,
            "Noblex",
            "Notebook Noblex 14 Core i3-1115G4 8GB 256GB Win11Home.",
            412699,
            "notebook",
            "imagenes/notebook/notebook-acer.webp"
        );
        //Celulares
        this.agregarRegistro(
            201,
            "Apple",
            "Apple - iPhone 13 Pro 256GB Sierra Blue.",
            2339900,
            "celular",
            "imagenes/celulares/celular-apple.webp"
        );
        this.agregarRegistro(
            202,
            "Samsung",
            "Celular Samsung Z Flip4 128 GB + Galaxy Buds2 Negro.",
            519598,
            "celular",
            "imagenes/celulares/celular-samsungFlip.webp"
        );
        this.agregarRegistro(
            203,
            "Samsun",
            "Samsung Galaxy Z Fold4 Dual Sim 512 Gb Gray Green 12 Gb Ram.",
            1346399,
            "celular",
            "imagenes/celulares/celular-samsungFold.webp"
        );
        this.agregarRegistro(
            204,
            "Motorola",
            "Celular Motorola Razr 40 Ultra 512GB Negro Infinito.",
            649999,
            "celular",
            "imagenes/celulares/celular-motorolarazr.webp"
        );
        this.agregarRegistro(
            205,
            "Xiaomi",
            "Celular Xiaomi Poco F4 GT 5G 12GB 256GB C Amarillo Sin Cargador.",
            906749,
            "celular",
            "imagenes/celulares/celular-xiaomiAmarillo.webp"
        );
        this.agregarRegistro(
            206,
            "TCL",
            "Tcl 30 Se 256 Gb Space Gray 6 Gb Ram.",
            160999,
            "celular",
            "imagenes/celulares/celular-tcl.webp"
        );
        this.agregarRegistro(
            207,
            "ZTE",
            "Celular ZTE Blade V40 Design 128GB Black.",
            89999,
            "celular",
            "imagenes/celulares/celular-zte.webp"
        );
        this.agregarRegistro(
            208,
            "Quantum",
            "Celular Quantum Q30 Octa-Core 6/128 GB 48+5+2/8 MP Negro.",
            168917,
            "celular",
            "imagenes/celulares/celular-quantum.webp"
        );
        this.agregarRegistro(
            209,
            "Apple",
            "Apple - iPhone 13 256GB Pink.",
            2429820,
            "celular",
            "imagenes/celulares/celular-apple-pink.webp"
        );
        //SMART TV
        this.agregarRegistro(
            301,
            "Samsung",
            "Smart TV 4K UHD Samsung 50 Pulgadas UN50AU7000.",
            214999,
            "smartTv",
            "imagenes/smartTv/smartTv-Samsung1.webp"
        );
        this.agregarRegistro(
            302,
            "Philips",
            "Smart TV  50 Pulgadas 4K UHD Philips 50PUD7406/77.",
            214999,
            "smartTv",
            "imagenes/smartTv/smartTv-Philips.webp"
        );
        this.agregarRegistro(
            303,
            "Admiral",
            "Smart TV 4K  50 Pulgadas 4K Android TV Admiral AD50G22.",
            199999,
            "smartTv",
            "imagenes/smartTv/smartTv-admiral.webp"
        );
        this.agregarRegistro(
            304,
            "Hitachi",
            "Smart TV Hitachi 50” 4K UHD LE504KSMART2.",
            224999,
            "smartTv",
            "imagenes/smartTv/smartTv-hitachi.webp"
        );
        this.agregarRegistro(
            305,
            "TCL",
            "Smart TV 55Pulgadas 4K UHD TCL L55P735.",
            279999,
            "smartTv",
            "imagenes/smartTv/smartTv-tcl.webp"
        );
        this.agregarRegistro(
            306,
            "LG",
            "Smart TV 4K 65 Pulgadas LG 65UP7750PSB.",
            489999,
            "smartTv",
            "imagenes/smartTv/smartTv-lg.webp"
        );
        this.agregarRegistro(
            307,
            "Noblex",
            "Smart Tv Noblex Dk75x7500 Led 4k 75 Pulgadas Google Tv Uhd.",
            749999,
            "smartTv",
            "imagenes/smartTv/smartTv-noblex.webp"
        );
        this.agregarRegistro(
            308,
            "Motorola",
            "Televisor Smart 50 Motorola 4K UHD Android MT50G22.",
            278999,
            "smartTv",
            "imagenes/smartTv/smartTv-motorola.webp"
        );
        this.agregarRegistro(
            309,
            "Samsung",
            "Smart TV 50 Pulgadas Neo QLED 4K Samsung QN50QN90CAGCZB.",
            799999,
            "smartTv",
            "imagenes/smartTv/smartTv-SamsungNeo.webp"
        );
        //Ofertas
        this.agregarRegistro(
            401,
            "Samsung",
            "Smart TV 50 Pulgadas Neo QLED 4K Samsung QN50QN90CAGCZB.",
            799999,
            "ofertas",
            "imagenes/smartTv/smartTv-SamsungNeo.webp"
        );
        this.agregarRegistro(
            402,
            "Apple",
            "Apple - iPhone 13 256GB Pink.",
            2429820,
            "ofertas",
            "imagenes/celulares/celular-apple-pink.webp"
        );
        this.agregarRegistro(
            403,
            "Noblex",
            "Notebook Noblex 14 Core i3-1115G4 8GB 256GB Win11Home.",
            412699,
            "ofertas",
            "imagenes/notebook/notebook-acer.webp"
        );
        this.agregarRegistro(
            404,
            "Noblex",
            "Smart Tv Noblex Dk75x7500 Led 4k 75 Pulgadas Google Tv Uhd.",
            749999,
            "ofertas",
            "imagenes/smartTv/smartTv-noblex.webp"
        );
        this.agregarRegistro(
            405,
            "Motorola",
            "Televisor Smart 50 Motorola 4K UHD Android MT50G22.",
            278999,
            "ofertas",
            "imagenes/smartTv/smartTv-motorola.webp"
        );
        this.agregarRegistro(
            406,
            "ZTE",
            "Celular ZTE Blade V40 Design 128GB Black.",
            89999,
            "ofertas",
            "imagenes/celulares/celular-zte.webp"
        );
        this.agregarRegistro(
            407,
            "Quantum",
            "Celular Quantum Q30 Octa-Core 6/128 GB 48+5+2/8 MP Negro.",
            168917,
            "ofertas",
            "imagenes/celulares/celular-quantum.webp"
        );
        this.agregarRegistro(
            408,
            "Apple",
            "Apple - MacBook Air 13” M1 Chip 8-core CPU 7-core GPU 256GB Silver.",
            1349900,
            "ofertas",
            "imagenes/notebook/notebook-apple.webp"
        );
        this.agregarRegistro(
            409,
            "Bangho",
            "Notebook Banghó Bes X4 Core I7 8GB 480GB 14” FHD Windows 11 Home + Office.",
            1244999,
            "ofertas",
            "imagenes/notebook/notebook-bangho.webp"
        );
    }

    // Método que crea el objeto producto y lo almacena en el catálogo (array)
    agregarRegistro(id, nombre, descripcion, precio, categoria, imagen) {
        const producto = new Producto(
            id,
            nombre,
            descripcion,
            precio,
            categoria,
            imagen
        );
        this.productos.push(producto);
    }

    // Nos devuelve todo el catálogo de productos
    traerRegistros() {
        return this.productos;
    }

    // Nos devuelve un producto según el ID
    registroPorId(id) {
        return this.productos.find((producto) => producto.id === id);
    }

    // Nos devuelve un array con todas las coincidencias que encuentre según el
    // nombre del producto con la palabra que el pasemos como parámetro
    registrosPorNombre(palabra) {
        return this.productos.filter((producto) =>
            producto.descripcion.toLowerCase().includes(palabra.toLowerCase())
        );
    }
}

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
