class Producto {
    constructor(nombre, precioBase) {
        if (!nombre) {
            throw new Error("El producto debe tener un nombre")
        }
        this.nombre = nombre;
        this.precioBase = precioBase;
    }
}

class ItemCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
        this.descuentos = [];
    }
    agregarDescuento(nuevoDescuento) {
        this.descuentos.push(nuevoDescuento);
    }
    precioFinal() {
        const precioBaseTotal = this.cantidad * this.producto.precioBase;
        const precioFinal = this.descuentos.reduce((precioAnterior, descuento) => {
            return (
                precioAnterior -
                descuento.valorDescontado(this.producto.precioBase, this.cantidad)
            );
        }, precioBaseTotal);
        return Math.max(0, precioFinal);
    }
}

class Carrito {
    constructor() {
        this.items = [];
    }
    agregarItem(item) {
        this.items.push(item);
    }
    precioTotal() {
        return this.items.reduce((total, item) => total + item.precioFinal(), 0);
    }
}

class DescuentoFijo {
    constructor(valor) {
        if (valor <= 0) {
            throw new Error("Un descuento no puede ser negativo.");
        }
        this.valor = valor;
    }
    valorDescontado(_precioBase, _cantidad) {
        return this.valor;
    }
}

class DescuentoPorcentual {
    constructor(porcentaje) {
        this.porcentaje = porcentaje;
    }
    valorDescontado(precioBase, cantidad) {
        return (cantidad * precioBase * this.porcentaje) / 100;
    }
}

class DescuentoPorCantidad {
    constructor(cantidadMinima, porcentaje) {
        this.cantidadMinima = cantidadMinima;
        this.porcentaje = porcentaje;
    }
    valorDescontado(precioBase, cantidad) {
        const vecesRepetida = Math.floor(cantidad / this.cantidadMinima);
        let valorDescontado = 0;
        if (vecesRepetida >= 1) {
            valorDescontado = precioBase * (this.porcentaje / 100) * vecesRepetida;
        }
        return valorDescontado;
    }
}

module.exports = {
    Producto,
    ItemCarrito,
    Carrito,
    DescuentoFijo,
    DescuentoPorCantidad,
    DescuentoPorCantidad,
};