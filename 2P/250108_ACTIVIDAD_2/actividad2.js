function Producto (nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = (precio > 0) ? precio : 0;
    this.cantidad = cantidad;
}

const inventario = {
    productos: [
        new Producto('Pasta dental', 2.50, 22),
        new Producto('Cepillo dental', 1.50, 12),
        new Producto('Shampoo', 10.50, 20),
        new Producto('Papel higiénico', 1.00, 32),
    ],
    vender: function (nombreProducto, cantidad) {
        let productoSeleccionado;
        for (producto of this.productos)
            if (nombreProducto === producto.nombre)
                productoSeleccionado = producto;

        if (!productoSeleccionado) {
            console.log('El producto no existe.');
            return;
        }

        if (cantidad > productoSeleccionado.cantidad) {
            console.log('No hay tanta cantidad en stock.');
            return;
        }

        productoSeleccionado.cantidad -= cantidad;
        console.log(`Se vendieron ${cantidad} unidades de ${productoSeleccionado.nombre}. Valor: $${cantidad * productoSeleccionado.precio}`);
    },
    aplicarDescuento: function (descuento) {
        if (descuento <= 0 || descuento > 1) {
            console.log('No se pudo aplicar el descuento.');
            return;
        }

        for (producto in this.productos) {
            producto.precio *= 1 - descuento;
        }

        console.log(`Descuento de ${descuento * 100}% aplicado.`)
    }
}

inventario.vender('Shampoo', 421);
inventario.vender('Pasta dental', 5);
inventario.aplicarDescuento(0.1);
inventario.vender('Cepillo dental', 10);