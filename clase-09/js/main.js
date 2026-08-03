// main.js — orquesta: pide los datos, usa la lógica y muestra el resultado.
// Este es el punto de partida de la segunda mitad de la Clase 9: los módulos ya están
// separados, pero la tienda todavía no reacciona. Todo lo que sigue se escribe en clase:
// el DOM (pintar el catálogo desde el array), los eventos y el localStorage.
import { productos } from "./datos.js"
import { resumenCarrito, conDescuento, masCaroDe } from "./carrito.js"
import formatearPrecio from "./formato.js"
import { fichaProducto } from "./ui.js"

console.log(resumenCarrito(productos))
// { cantidad: 5, subtotal: 4549.95, total: 5368.941 }

console.log(formatearPrecio(productos[0].precio))               // S/ 1999.99
console.log(formatearPrecio(conDescuento(productos[0].precio))) // S/ 1799.99  (10% por defecto)
console.log(masCaroDe(productos).nombre)                        // MacBook Pro 14

console.log(productos.map(fichaProducto).join(""))
