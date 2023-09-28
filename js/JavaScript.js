// Creamos un array con todos los productos
// Cada producto se diferenciara por una palabra clave "tipo"

const productos = [
    //NOTEBOOKS
    {
        nombre: "Lenovo",
        descripcion:
            "Notebook Lenovo 14” Celeron 4GB 500GB IdeaPad 3 81WH0015AR.",
        precio: "$199.999",
        imagen: "imagenes/notebook/lenovo.webp",
        tipo: "notebook",
    },
    {
        nombre: "HP",
        descripcion:
            "Notebook HP 15.6” Intel Core i5 10 Núcleos 8GB RAM 512GB SSD- DY5001LA.",
        precio: "$199.999",
        imagen: "imagenes/notebook/notebook-hp.webp",
        tipo: "notebook",
    },
    {
        nombre: "Acer",
        descripcion:
            "Notebook Acer 15,6” Intel Core i5 12 Núcleos 8GB 512GB SSD Nitro 5 Placa.",
        precio: "$729.999",
        imagen: "imagenes/notebook/notebook-acer.webp",
        tipo: "notebook",
    },
    {
        nombre: "Samsung",
        descripcion:
            "Notebook Samsung 16” Intel Core i7 12 Núcleos 512GB 16GB Galaxy Book3 Pro 360 NP960QFG-KA1A.",
        precio: "$1.244.999",
        imagen: "imagenes/notebook/notebook-samsung.webp",
        tipo: "notebook",
    },
    {
        nombre: "DELL",
        descripcion:
            "Notebook DELL 15.6” Ryzen 5 8GB 256GB SSD INSP3525 2DJ8R.",
        precio: "$479.999",
        imagen: "imagenes/notebook/notebook-dell.webp",
        tipo: "notebook",
    },
    {
        nombre: "Asus",
        descripcion:
            "Notebook Asus 15,6” Intel Core i5 12 Núcleos 8GB 256GB SSD X1502ZA-EJ294W.",
        precio: "$489.999",
        imagen: "imagenes/notebook/notebook-asus.webp",
        tipo: "notebook",
    },
    {
        nombre: "Apple",
        descripcion:
            "MacBook Air 13” M1 Chip 8-core CPU 7-core GPU 256GB Silver.",
        precio: "$1.349.900",
        imagen: "imagenes/notebook/notebook-apple.webp",
        tipo: "notebook",
    },
    {
        nombre: "Bangho",
        descripcion:
            "Notebook Banghó Bes X4 Core I7 8GB 480GB 14” FHD Windows 11 Home + Office.",
        precio: "$1.199.999",
        imagen: "imagenes/notebook/notebook-bangho.webp",
        tipo: "notebook",
    },
    {
        nombre: "Noblex",
        descripcion: "Notebook Noblex 14 Core i3-1115G4 8GB 256GB Win11Home.",
        precio: "$412.699",
        imagen: "imagenes/notebook/notebook-acer.webp",
        tipo: "notebook",
    },

    //CELULARES
    {
        nombre: "Apple",
        descripcion: "iPhone 13 Pro 256GB Sierra Blue.",
        precio: "$2.339.900",
        imagen: "imagenes/celulares/celular-apple.webp",
        tipo: "celular",
    },
    {
        nombre: "Samsung",
        descripcion: "Celular Samsung Z Flip4 128 GB + Galaxy Buds2 Negro.",
        precio: "$519.598",
        imagen: "imagenes/celulares/celular-samsungFlip.webp",
        tipo: "celular",
    },
    {
        nombre: "Samsung",
        descripcion:
            "Samsung Galaxy Z Fold4 Dual Sim 512 Gb Gray Green 12 Gb Ram.",
        precio: "$1.346.399",
        imagen: "imagenes/celulares/celular-samsungFold.webp",
        tipo: "celular",
    },
    {
        nombre: "Motorola",
        descripcion: "Celular Motorola Razr 40 Ultra 512GB Negro Infinito.",
        precio: "$649.999",
        imagen: "imagenes/celulares/celular-motorolarazr.webp",
        tipo: "celular",
    },
    {
        nombre: "Xiaomi",
        descripcion:
            "Celular Xiaomi Poco F4 GT 5G 12GB 256GB C Amarillo Sin Cargador.",
        precio: "$906.749",
        imagen: "imagenes/celulares/celular-xiaomiAmarillo.webp",
        tipo: "celular",
    },
    {
        nombre: "TCL",
        descripcion: "Tcl 30 Se 256 Gb Space Gray 6 Gb Ram.",
        precio: "$160.999",
        imagen: "imagenes/celulares/celular-tcl.webp",
        tipo: "celular",
    },
    {
        nombre: "ZTE",
        descripcion: "Celular ZTE Blade V40 Design 128GB Black.",
        precio: "$89.999",
        imagen: "imagenes/celulares/celular-zte.webp",
        tipo: "celular",
    },
    {
        nombre: "Quantum",
        descripcion:
            "Celular Quantum Q30 Octa-Core 6/128 GB 48+5+2/8 MP Negro.",
        precio: "$168.917",
        imagen: "imagenes/celulares/celular-quantum.webp",
        tipo: "celular",
    },
    {
        nombre: "Apple",
        descripcion: "iPhone 13 256GB Pink.",
        precio: "$2.429.820",
        imagen: "imagenes/celulares/celular-apple-pink.webp",
        tipo: "celular",
    },

    //SMART TV
    {
        nombre: "Samsung",
        descripcion: "Smart TV 4K UHD Samsung 50 Pulgadas UN50AU7000.",
        precio: "$249.999",
        imagen: "imagenes/smartTv/smartTv-Samsung1.webp",
        tipo: "smartTv",
    },
    {
        nombre: "Philips",
        descripcion: "Smart TV  50 Pulgadas 4K UHD Philips 50PUD7406/77.",
        precio: "$214.999",
        imagen: "imagenes/smartTv/smartTv-Philips.webp",
        tipo: "smartTv",
    },
    {
        nombre: "Admiral",
        descripcion: "Smart TV 4K  50 Pulgadas 4K Android TV Admiral AD50G22.",
        precio: "$199.999",
        imagen: "imagenes/smartTv/smartTv-admiral.webp",
        tipo: "smartTv",
    },
    {
        nombre: "Hitachi",
        descripcion: "Smart TV Hitachi 50” 4K UHD LE504KSMART2.",
        precio: "$224.999",
        imagen: "imagenes/smartTv/smartTv-hitachi..webp",
        tipo: "smartTv",
    },
    {
        nombre: "TCL",
        descripcion: "Smart TV 55Pulgadas 4K UHD TCL L55P735.",
        precio: "$279.999",
        imagen: "imagenes/smartTv/smartTv-tcl.webp",
        tipo: "smartTv",
    },
    {
        nombre: "LG",
        descripcion: "Smart TV 4K 65 Pulgadas LG 65UP7750PSB.",
        precio: "$489.999",
        imagen: "imagenes/smartTv/ssmartTv-lg.webp",
        tipo: "smartTv",
    },
    {
        nombre: "Noblex",
        descripcion:
            "Smart Tv Noblex Dk75x7500 Led 4k 75 Pulgadas Google Tv Uhd.",
        precio: "$749.999",
        imagen: "imagenes/smartTv/smartTv-noblex.webp",
        tipo: "smartTv",
    },
    {
        nombre: "Motorola",
        descripcion: "Televisor Smart 50 Motorola 4K UHD Android MT50G22.",
        precio: "$278.999",
        imagen: "imagenes/smartTv/smartTv-motorola.webp",
        tipo: "smartTv",
    },
    {
        nombre: "Samsung",
        descripcion: "Smart TV 50 Pulgadas Neo QLED 4K Samsung QN50QN90CAGCZB.",
        precio: "$799.999",
        imagen: "imagenes/smartTv/smartTv-SamsungNeo.webp",
        tipo: "smartTv",
    },

    //Ofertas
    {
        nombre: "Motorola",
        descripcion: "Televisor Smart 50 Motorola 4K UHD Android MT50G22.",
        precio: "$278.999",
        imagen: "imagenes/smartTv/smartTv-motorola.webp",
        tipo: "ofertas",
    },
    {
        nombre: "Quantum",
        descripcion:
            "Celular Quantum Q30 Octa-Core 6/128 GB 48+5+2/8 MP Negro.",
        precio: "$168.917",
        imagen: "imagenes/celulares/celular-quantum.webp",
        tipo: "ofertas",
    },
    {
        nombre: "Noblex",
        descripcion: "Notebook Noblex 14 Core i3-1115G4 8GB 256GB Win11Home.",
        precio: "$412.699",
        imagen: "imagenes/notebook/notebook-acer.webp",
        tipo: "ofertas",
    },
    {
        nombre: "Motorola",
        descripcion: "Televisor Smart 50 Motorola 4K UHD Android MT50G22.",
        precio: "$278.999",
        imagen: "imagenes/smartTv/smartTv-motorola.webp",
        tipo: "smartTv",
    },
    {
        nombre: "TCL",
        descripcion: "Smart TV 55Pulgadas 4K UHD TCL L55P735.",
        precio: "$279.999",
        imagen: "imagenes/smartTv/smartTv-tcl.webp",
        tipo: "smartTv",
    },
    {
        nombre: "TCL",
        descripcion: "Tcl 30 Se 256 Gb Space Gray 6 Gb Ram.",
        precio: "$160.999",
        imagen: "imagenes/celulares/celular-tcl.webp",
        tipo: "celular",
    },
    {
        nombre: "ZTE",
        descripcion: "Celular ZTE Blade V40 Design 128GB Black.",
        precio: "$89.999",
        imagen: "imagenes/celulares/celular-zte.webp",
        tipo: "celular",
    },
    {
        nombre: "DELL",
        descripcion:
            "Notebook DELL 15.6” Ryzen 5 8GB 256GB SSD INSP3525 2DJ8R.",
        precio: "$479.999",
        imagen: "imagenes/notebook/notebook-dell.webp",
        tipo: "notebook",
    },
    {
        nombre: "Asus",
        descripcion:
            "Notebook Asus 15,6” Intel Core i5 12 Núcleos 8GB 256GB SSD X1502ZA-EJ294W.",
        precio: "$489.999",
        imagen: "imagenes/notebook/notebook-asus.webp",
        tipo: "notebook",
    },
];

// Seleccionamos los elementos del HTML
const divNotebooks = document.querySelector(".notebooks");
const divCelulares = document.querySelector(".celulares");
const divSmartTv = document.querySelector(".smartTv");
const divOfertas = document.querySelector(".ofertas");

// Función para mostrar productos de un tipo específico y se crea un nuevo array con los productos encontrados
function mostrarProductos(tipo, cantidadMostrar, todos = false) {
    // Filtro los productos por el tipo
    const productosFiltrados = productos.filter(
        (producto) => producto.tipo === tipo
    );
    // determinamos constante de todos los productos del array
    const cantidad = todos ? productosFiltrados.length : cantidadMostrar;

    // Tomamos solo las primeras "cantidadMostrar" tarjetas para mostrar inicialmente
    const tarjetasIniciales = productosFiltrados.slice(0, cantidadMostrar);

    // Recorremos del array nuevo y mostramos las tarjetas iniciales
    for (const producto of tarjetasIniciales) {
        // Crear elemento HTML para la tarjeta del producto
        const card = document.createElement("div");
        card.classList.add("card");

        // Aca editamos el contenido de la tarjeta con los detalles del producto y agregamos el boton de "comprar"
        card.innerHTML = `
                <div class="producto-imagen">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <div>
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p class="precio">${producto.precio}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            `;

        // Utilizo  una estructura switch para determinar el tipo
        switch (tipo) {
            case "notebook":
                divNotebooks.appendChild(card);
                break;
            case "celular":
                divCelulares.appendChild(card);
                break;
            case "smartTv":
                divSmartTv.appendChild(card);
                break;
            case "ofertas":
                divOfertas.appendChild(card);
                break;
            default:
                // Para cuando haya un producto desconocido
                console.error(`El  producto no es válido: ${tipo}`);
        }
    }
}

// Llamo a la función para mostrar solo 3 productos de cada tipo
mostrarProductos("notebook", 3);
mostrarProductos("celular", 3);
mostrarProductos("smartTv", 3);
mostrarProductos("ofertas", 3);

// Selecciono el botón "Ver Más Notebooks"
const verMasNotebooksBtn = document.querySelector("#verMasNotebooksBtn");
// Selecciono el cuadro emergente
const cuadroProductos = document.querySelector(
    "#cuadroProductos .cuadro-contenido"
);
cuadroProductos.append(card);
// Agrego el manejador  de eventos al botón "Ver Más Notebooks"
verMasNotebooksBtn.addEventListener("click", function () {
    // Llamo a la función mostrarProductos con el parámetro para que me muestre todos del tipo "notebook"
    mostrarProductos("notebook", 0, true);

    // Muestro el cuadro emergente
    cuadroProductos.style.display = "block";
});

// Manejador de eventos para cerrar el cuadro emergente
const cerrarCuadroBtn = document.querySelector("#cerrarCuadro");
cerrarCuadroBtn.addEventListener("click", function () {
    // Oculto el cuadro emergente al hacer clic en el botón de cerrar
    cuadroProductos.style.display = "none";
});
