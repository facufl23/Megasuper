import { Producto, ItemCarrito, Carrito, DescuentoPorCantidad } from './domain.js';

import {
    aumentarPrecioBaseMap,
    precioMasAlto,
    productosMasBaratosQue,
    obtenerSumaTotalPrecios,
    ordenarListaProductos,
} from './functions.js';

const carrito = new Carrito();

let p1 = new Producto('Coca-cola', 1000);
let item1 = new ItemCarrito(p1, 3);
item1.agregarDescuento(new DescuentoPorCantidad(3, 100));

let p2 = new Producto('Papas lays', 2000);
let item2 = new ItemCarrito(p2, 1);

carrito.agregarItem(item1);
carrito.agregarItem(item2);

console.log("Carrito armado: ");
console.log(carrito);

console.log("El precio total del carrito es: ", carrito.precioTotal());

const productos = carrito.items.map((item) => item.producto);
const nuevosProductos = aumentarPrecioBaseMap(productos, 100);
console.log("Los productos con los precios actualizados: ");
console.log(nuevosProductos);


console.log("El precio mas alto es: ", precioMasAlto(carrito.items));

console.log("PRODUCTOS MAS BARATOS QUE 1500:");
const bebidas = [
    new ItemCarrito(new Producto('Coca-cola', 1000), 1),
    new ItemCarrito(new Producto('7up', 2000), 1),
    new ItemCarrito(new Producto('Jugo', 1500), 1),
    new ItemCarrito(new Producto('Agua', 700), 1),
];

console.log(productosMasBaratosQue(bebidas, 1500));

console.log("El precio final es: ", obtenerSumaTotalPrecios(bebidas));

console.log("ORDENAMOS LA LISTA: ");
ordenarListaProductos(bebidas);
console.log(bebidas);