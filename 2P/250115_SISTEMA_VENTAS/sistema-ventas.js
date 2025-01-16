// Sistema de ventas en JS

// Clases
// ------------------------------------------------------------------------------------------------

class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio, categoria, stock) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio >= 0 ? precio : 0;
        this._categoria = categoria;
        this._stock = stock;

        VentasTest.inventario.push(this);
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }

    get categoria() {
        return this._categoria;
    }

    set categoria(categoria) {
        this._categoria = categoria;
    }

    get stock() {
        return this._stock;
    }

    set stock(stock) {
        this._stock = stock;
    }

    get toString() {
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}, categoria: ${this._categoria}, stock: ${this._stock}`
    }
}

class Orden {
    static contadorOrdenes = 0;

    static get IVA() {
        return 0.15;
    }

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    set idOrden(idOrden) {
        this._idOrden = idOrden;
    }

    agregarProducto(producto) {
        if (this._productos.length >= Orden.MAX_PRODUCTOS) {
            console.log(`No se pueden agregar más de ${Orden.MAX_PRODUCTOS} productos.`);
            return;
        }

        if (producto.stock <= 0) {
            console.log(`No se puede vender más ${producto.nombre}`);
            return;
        }
        
        this._productos.push(producto);
        producto.stock -= 1;
    }

    ordenarProductosPorPrecio(ascendente) { // true para ascendente, false para descendente
        let productosOrdenados = ascendente ?
            this._productos.sort((a, b) => a.precio - b.precio) : this._productos.sort((a, b) => b.precio - a.precio) ;
        
        return productosOrdenados;
    }

    calcularSubtotal() {
        let subtotal = 0;

        for (const producto of this._productos) {
            subtotal += producto.precio;
        }

        return subtotal;
    }

    calcularImpuesto() {
        return this.calcularSubtotal() * Orden.IVA;
    }

    calcularTotal() {
        return this.calcularImpuesto() + this.calcularSubtotal();
    }

    mostrarOrden() {
        console.log('');
        console.log('==============================================================================');
        console.log(`ORDEN ID: ${this.idOrden}`);
        console.log('------------------------------------------------------------------------------');

        console.log('PRODUCTOS:')
        for (const producto of this.ordenarProductosPorPrecio(true)) {
            console.log(producto.toString);
        }

        console.log('------------------------------------------------------------------------------');
        console.log(`subtotal: ${this.calcularSubtotal()}, impuesto: ${this.calcularImpuesto()}, total: ${this.calcularTotal()}`);
        console.log('==============================================================================');
    }
}

class VentasTest {
    static inventario = [];

    static aplicarDescuento(categoria, porcentaje) {
        for (const producto of VentasTest.inventario)
            if (producto.categoria === categoria)
                producto.precio *= 1 - porcentaje / 100;
    }

    static mostrarInventario() {
        console.log(VentasTest.inventario);
    }
}

// IMPLEMENTACIÓN
// ------------------------------------------------------------------------------------------------

// Stock [x]

// Descuento por categoría: nueva propiedad en producto [x]
// categoria Electronica -> 10% desc y calcular total en ventas [x]

// Implementar metodo de calcularImpuesto() [x];

// Ordenar productos por precio en Orden [x];

// Asegurar que los precios no sean negativos en la clase productos [x]

const producto1 = new Producto('Shampoo', 8, 'Higiene', 20);
const producto2 = new Producto('Jabón', 2, 'Higiene', 10);
const producto3 = new Producto('Monitor', 100, 'Electrónica', 5);
const producto4 = new Producto('Mouse', 10, 'Electrónica', 10);

VentasTest.mostrarInventario();
VentasTest.aplicarDescuento('Electrónica', 10); // Descuento del 10% a Electrónica
VentasTest.mostrarInventario(); // Mostrar inventario

const orden1 = new Orden();
const orden2 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);

orden1.mostrarOrden();
orden2.mostrarOrden();