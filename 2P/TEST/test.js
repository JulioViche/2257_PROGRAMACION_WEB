class Inventario {
    constructor() {
        this.productos = [];
    }

    añadirProducto(nombre, precio, cantidad, categoria) {
        let productoNuevo = new Object();
        productoNuevo.nombre = nombre;
        productoNuevo.precio = precio;
        productoNuevo.cantidad = cantidad;
        productoNuevo.categoria = categoria;
        productoNuevo.cantidadVendida = 0;

        this.productos.push(productoNuevo);
    }

    ordenarProductosPorPrecio(ascendente) { // true para ascendente, false para descendente
        let productosOrdenados = ascendente ?
            this.productos.sort((a, b) => a.precio - b.precio) : this.productos.sort((a, b) => b.precio - a.precio) ;
        
        return productosOrdenados;
    }

    filtrarProductos(categoria) {
        let productosFiltrados = this.productos.filter((a) => a.categoria === categoria);
        return productosFiltrados;
    }

    aplicarDescuento(categoria, porcentaje) {
        // Validación de existencia
        let existe = false;

        for (let producto of this.productos)
            if (producto.categoria === categoria) {
                producto.precio *= 1 - porcentaje / 100; // Descuento
                existe = true;
            }
        
        if (!existe)
            console.log(`Error de descuento: La categoría ${categoria} no existe, no se aplicó el descuento.`);
        else
            console.log(`Descuento realizado: ${porcentaje}% a la categoría ${categoria}.`);
    }
}

class Venta {
    constructor(inventario) {
        this.inventario = inventario;
        this.ventas = [];
    }

    realizarVenta(nombreProducto, cantidad) {
        let productoSeleccionado = null;
        
        // Validación de existencia
        for (let producto of this.inventario.productos)
            if (producto.nombre === nombreProducto)
                productoSeleccionado = producto;
        
        if (!productoSeleccionado) {
            console.log(`Error de venta: ${nombreProducto} no existe en el inventario.`);
            return;
        }

        // Validación de cantidad suficiente
        if (cantidad > productoSeleccionado.cantidad) {
            console.log(`Error de venta: ${productoSeleccionado.nombre} no tiene suficiente stock.`);
            return;
        }

        // Venta
        productoSeleccionado.cantidad -= cantidad;
        productoSeleccionado.cantidadVendida += cantidad;

        let ventaNueva = new Object();
        ventaNueva.producto = productoSeleccionado;
        ventaNueva.cantidad = cantidad;
        ventaNueva.fecha = new Date(Date.now());

        this.ventas.push(ventaNueva);

        console.log(`Venta realizada: ${cantidad} unidades de ${productoSeleccionado.nombre}.`);
    }

    ingresos() { // Calcula los ingresos totales basado en las ventas
        let total = 0;

        for (let vendido of this.ventas)
            total += vendido.producto.precio * vendido.cantidad;

        return total;
    }

    masVendido() {
        let masVendido = this.inventario.productos[0];

        for (let producto of this.inventario.productos)
            masVendido = producto.cantidadVendida > masVendido.cantidadVendida ? producto : masVendido;

        return masVendido;
    }
}

function reporte(venta) {
    console.log('----------------------------------------------------------------');
    console.log('                     REPORTE DETALLADO                          ');
    console.log('----------------------------------------------------------------');

    console.log('                        Inventario                              ');
    console.log('Nombre, Categoría, Cantidad, Precio                             ');
    for (let producto of venta.inventario.ordenarProductosPorPrecio(true)) // Productos ordenados 
        console.log(`${producto.nombre}, ${producto.categoria}, ${producto.cantidad}, $${producto.precio}`);

    console.log('----------------------------------------------------------------');
    console.log('                        Ventas                                 ');
    console.log('Producto, Cantidad, Fecha, Subtotal                           ');
    for (let vendido of venta.ventas)
        console.log(`${vendido.producto.nombre}, ${vendido.cantidad}, ${vendido.fecha}, $${vendido.producto.precio * vendido.cantidad}`);

    console.log('----------------------------------------------------------------');
    console.log('                        Resumen                                 ');
    console.log(`Ingresos totales: $${venta.ingresos()}`);
    console.log(`Producto más vendido: ${venta.masVendido().nombre}, ${venta.masVendido().cantidadVendida} unidades.`);
}

const inventario = new Inventario();
inventario.añadirProducto('Shampoo', 10.5, 10, 'Higiene');
inventario.añadirProducto('Jabon', 2.5, 20, 'Higiene');
inventario.añadirProducto('Leche', 1, 10, 'Víveres');
inventario.añadirProducto('Pan', 0.35, 40, 'Víveres');
inventario.añadirProducto('Monitor', 400, 5, 'Tecnología');

const venta = new Venta(inventario);
venta.realizarVenta('Shampoo', 10);
inventario.aplicarDescuento('Víveres', 10);
venta.realizarVenta('Pan', 5);
venta.realizarVenta('Pan', 6);
venta.realizarVenta('Leche', 2);
inventario.aplicarDescuento('Tecnología', 20);
venta.realizarVenta('Monitor', 10);
venta.realizarVenta('Monitor', 2);

reporte(venta);

console.log(inventario.filtrarProductos('Tecnología'));