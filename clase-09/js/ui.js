// ui.js — cómo se ve un producto. No calcula nada y no sabe de dónde vienen los datos.
// Hoy devuelve texto; en clase le vamos a poner etiquetas HTML adentro para que
// JavaScript pinte las tarjetas del catálogo.
import formatearPrecio from "./formato.js"

export const fichaProducto = ({ nombre, categoria, precio, stock }) => `
  ${nombre}
  categoría: ${categoria}
  precio:    ${formatearPrecio(precio)}
  ${stock > 0 ? `En stock (${stock})` : "Agotado"}
`
