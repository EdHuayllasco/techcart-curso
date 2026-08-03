# Clase 9. El DOM: la tienda reacciona

Hasta ahora TechCart se **ve** (Clases 2-6) y **piensa** (Clases 7-8), pero todo lo que piensa vive
en la consola: el usuario no ve nada. En la Clase 9 abrimos la puerta entre JavaScript y la página
—el **DOM**— y la tienda deja de ser una foto: el catálogo se **pinta solo** desde el array, los
botones **responden** al clic y el carrito **sobrevive al refresco**.

## Contenido de la carpeta (y en qué estado está)

Esta carpeta arranca en el **punto donde queda la clase al llegar al receso**: los módulos ya están
separados, pero la tienda todavía no reacciona.

- `index.html` y `css/styles.css`: TechCart tal como quedó en la Clase 6, con el `<script>` ya
  convertido en **módulo** (`type="module"`). El catálogo sigue escrito a mano con cuatro
  `<article>`: **esas tarjetas se borran en clase**, cuando JavaScript aprenda a pintarlas.
- `js/datos.js`: el catálogo. Cada producto ahora tiene `id` e `imagen` (el `id` porque el carrito
  necesita saber cuál producto es; la `imagen` porque si JS dibuja la tarjeta, tiene que saber qué
  foto poner). Ojo con el último producto.
- `js/carrito.js`: el dinero. `IGV`, `resumenCarrito`, `conDescuento` y `masCaroDe`.
- `js/formato.js`: un solo trabajo, y con `export default`.
- `js/ui.js`: cómo se ve un producto. Hoy devuelve texto; en clase le entran etiquetas HTML.
- `js/main.js`: orquesta. Solo importa, usa y muestra en consola.

> **Si te quedaste atrás en la Clase 8, descarga esta carpeta y arrancas parejo.** Las dos sesiones
> anteriores se cortaron a mitad, así que este es el punto de partida común. Lo que se escribe
> **durante** la clase es el DOM, los eventos y el `localStorage`.

## Herramientas de hoy

- **Live Server** en VS Code, y hoy no es opcional: los módulos (`import`/`export`) no funcionan si
  abres el `index.html` a mano. El navegador los bloquea por seguridad.
- **DevTools** (F12) en dos pestañas nuevas: **Elements**, para ver el DOM como árbol, y
  **Application → Local Storage**, para ver lo que guardamos.

## Temas

**Cierre de la Clase 8 (primera mitad):**
1. **Spread**: `aplicarDescuento` devolviendo una **copia**, y ordenar sin mutar con
   `[...productos].sort(...)`.
2. **Detalles de ES6+**: propiedades abreviadas (`{ cantidad, total }`), arrow que devuelve un
   objeto (`p => ({ … })`, con paréntesis), parámetros por defecto, `find`, y la pareja **`?.` y
   `??`** — con `??` en vez de `||` cuando el `0` es un valor válido.
3. **Módulos**: `export` / `import`, `export default`, `<script type="module">` y el proyecto
   repartido en cinco archivos.

**El DOM (segunda mitad):**
4. **El árbol**: `document`, `querySelector` y `querySelectorAll` con **los selectores de CSS** que
   ya conoces. Si no encuentra nada devuelve `null`.
5. **`textContent` vs `innerHTML`**: texto plano contra etiquetas de verdad. `innerHTML` reemplaza
   todo lo de adentro, y con datos externos hay riesgo de **XSS**.
6. **Pintar el catálogo desde el array**: `map` + `join("")`, y adiós a las 40 líneas de HTML
   escritas a mano. Si mañana son 40 productos, aparecen 40.
7. **Eventos**: `addEventListener`, el objeto `evento`, y el problema de verdad — los elementos que
   JavaScript crea **nacen sin listener**. Se resuelve con **delegación**: un listener en el
   contenedor y `closest` para preguntar quién originó el clic.
8. **`dataset`**: los atributos `data-*` para saber **cuál** producto. Siempre devuelven **texto**,
   así que van con `Number()`.
9. **`localStorage`**: guarda solo texto, así que va con `JSON.stringify` y `JSON.parse`, y envuelto
   en `try/catch`. Más `sessionStorage`, que es la misma API pero se borra al cerrar la pestaña.

## La idea que ordena todo

> **Un dato, una función que pinta.** El evento hace dos cosas: cambia el dato y llama a pintar.
> Nunca toca la pantalla por su cuenta. La función que pinta mira el dato y lo dibuja, y nunca
> modifica el dato. Cuando lleguemos a React con `useState`, vas a reconocer exactamente esto.

## Errores que vas a ver hoy (y qué significan)

| Mensaje | Causa |
|---|---|
| `Cannot use import statement outside a module` | Falta `type="module"` en el `<script>`. |
| `404` / `Failed to resolve module specifier` | Falta la extensión **`.js`** en el import. |
| `does not provide an export named 'X'` | La función existe, pero le falta el `export`. |
| `Cannot read properties of null` | El selector no encontró nada: revisa el **selector**, no el JS. |
| `Cannot read properties of undefined` | Le pediste una propiedad a algo que no existe → usa `?.`. |
| El botón funciona una vez y después no | Repintaste con `innerHTML` y mataste los listeners → **delegación**. |
| `[object Object]` guardado en localStorage | Te faltó `JSON.stringify`. |
| Hago clic y no agrega nada, sin errores | `dataset` da **texto**: te faltó `Number()`. |

> ⚠️ Un error de import que **solo aparece al desplegar**: `"./Datos.js"` con mayúscula funciona en
> Windows y da 404 en Vercel (Linux). Nombres de archivo en minúscula, siempre.

## Lecturas y recursos

- **MDN**: *Introduction to the DOM* y *Web Storage API*.
- Lo que no vimos y vale la pena: **`createElement`** y `appendChild` (crear elementos sin
  `innerHTML`, sin riesgo de XSS), **`classList`** para agregar y quitar clases, los eventos
  `input` y `submit`, y **`event.preventDefault()`** para que un formulario no recargue la página.
- De la Clase 8 quedaron pendientes `some` y `every`, y el `reduce` con acumulador **objeto** para
  agrupar por categoría (está en las tareas).
- `getElementById` y `getElementsByClassName` funcionan y los vas a ver en tutoriales viejos, pero
  `querySelector` los cubre a todos con la sintaxis de CSS que ya sabes.

> ⚠️ En `localStorage` **no** se guardan contraseñas ni datos sensibles: cualquier JavaScript de la
> página lo puede leer.

> Basado en el proyecto de referencia TechCart. Datos e imágenes de [DummyJSON](https://dummyjson.com).
