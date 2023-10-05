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
