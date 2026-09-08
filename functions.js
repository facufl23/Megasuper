import { Producto } from './domain.js';

function aumentarPrecioBase(productos, monto) {
    productos.forEach((producto) => {
        producto.precioBase = producto.precioBase + monto;
    });
}

function aumentarPrecioBaseMap(productos, monto) {
    return productos.map((producto) => {
        return new Producto(
            producto.nombre,
            producto.precioBase + monto,
        );
    });
}

function precioMasAlto(productos) {
    const preciosProductos = productos.map((producto) => producto.precioFinal());
    return Math.max(...preciosProductos);
}

function productosMasBaratosQue(productos, precioMaximo) {
    return productos.filter((producto) => producto.precioFinal() <= precioMaximo);
}

function obtenerSumaTotalPrecios(productos) {
    return productos.reduce((precioAnterior, productoActual) => {
        return precioAnterior + productoActual.precioFinal();
    }, 0);
}

function ordenarListaProductos(productos) {
    productos.sort((productoA, productoB) => {
        return productoA.precioFinal() - productoB.precioFinal();
    });
}

export {
    aumentarPrecioBase,
    aumentarPrecioBaseMap,
    precioMasAlto,
    productosMasBaratosQue,
    obtenerSumaTotalPrecios,
    ordenarListaProductos,
};