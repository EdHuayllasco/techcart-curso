# Clase 12 — TypeScript: el contrato del proyecto

> ⏱️ **Duración: 4 h 30 min** de contenido (el receso va aparte).
> ✅ **Esta carpeta es el punto de partida**: el proyecto tal como quedó cuando se cortó la Clase 11.
> 🟢 **Primera clase que necesita Node.js.** Antes de empezar, abrí una terminal y escribí `node -v`.
> Si no responde un número, instalalo desde [nodejs.org](https://nodejs.org) (versión LTS).

Los tres errores que vivimos en la Clase 11 eran **el mismo error**: el respaldo mostró `undefined` en la
marca, el carrito guardado dijo `S/ NaN`, y el buscador se habría roto si `marca` viniera vacía. En los
tres, un objeto no tenía la forma que el código esperaba — y **nadie avisó**.

Hoy le ponemos **tipos** a este proyecto. De esta clase en adelante, todo —incluido React— se escribe en
TypeScript.

## ⚠️ Todos partimos del mismo código

La Clase 11 se cortó y cada uno quedó en un punto distinto. **Descargá esta carpeta y trabajá sobre ella**,
para que cuando el profe diga "acá les tiene que salir un subrayado rojo", te salga a vos también.
Si tu versión está más avanzada, **guardala aparte** y compará al final: no la tires.

## Conceptos que se enseñan (temario)
1. **Qué es TypeScript** — un **compilador**, no un runtime: los tipos **desaparecen** y el navegador solo ve JavaScript. De ahí la frase del día: *anotar un tipo no valida nada*.
2. **Tipado estructural** — Java mira el **nombre** (`implements`), TypeScript mira la **forma**. Si tiene los campos, **es** ese tipo.
3. **Instalar y compilar** — `npm init`, `npm i -D typescript`, `tsconfig.json`, `tsc --watch`, `src/` → `dist/`.
4. **`interface`** — el contrato en un solo lugar (`tipos.ts`), inferencia, y por qué **no se anota lo obvio**.
5. **Uniones (`|`), literales, opcionales (`?`), intersecciones (`&`)** — los tipos que Java no tiene.
6. **Tipos de función** — `(id: number) => void` y `void`: la mitad de las props de React.
7. **Narrowing** — el compilador **lee tus `if`**: `typeof`, `Array.isArray`, `instanceof`. Y por qué el `!` es una promesa peligrosa.
8. **Genéricos** — leer `Array<T>`, `Promise<T>`, `Pick`/`Omit`… y escribir uno propio con `<T extends …>`.
9. **`any` vs `unknown`** — apagar TypeScript, o que te obligue a mirar.
10. **Las tres aduanas** — la API, el `localStorage` y el formulario: las tres puertas por donde entra lo que no escribimos nosotros.
11. **El checkout, en TypeScript** — `submit`, la validación nativa que regaló la Clase 1, `FormData` + `Object.fromEntries`, y el `Pedido` tipado.

## Agenda (4 h 30)
| Bloque | Tiempo | Qué se hace |
|--------|:------:|-------------|
| 1. Punto de partida + cerrar JS | 24 min | `document.title` y `some`/`every` (en JavaScript). |
| 2. Por qué TypeScript | 26 min | Los tres fantasmas · qué es en serio · el **Playground**. |
| 3. Instalar y compilar | 32 min | npm, tsc, tsconfig, `--watch`, y el primer error. |
| 4. El contrato | 38 min | `interface Producto` y el adaptador tipado. |
| ☕ Receso | 15 min | Aparte. |
| 5. Lo que React va a pedir | 46 min | Uniones, tipos de función, `<>`, narrowing. |
| 6. Las tres aduanas | 40 min | `any` vs `unknown`, API, `localStorage`, DOM. |
| 7. Genérico propio + **checkout** | 40 min | La última deuda de JavaScript, ya en TypeScript. |
| 8. Cierre | 24 min | Resumen, lecturas, 5 tareas y anticipo a React. |

## Contenido de la carpeta (el punto de partida)
- `index.html` y `css/styles.css`: la barra lateral con `data-categoria`, el buscador, el aviso del respaldo y la sección del carrito. El `<script>` todavía apunta a `js/main.js` — **en clase pasa a `dist/main.js`**.
- `js/datos.js`: el plan B, con `marca` y `valoracion`.
- `js/api.js`: `Promise.all` con las cuatro categorías, el adaptador y el respaldo con `{ productos, esRespaldo }`.
- `js/carrito.js`: `agregarItem`, `cambiarCantidad`, `quitarItem` y `resumenCarrito` (cuenta **unidades**), con tope de stock.
- `js/ui.js`: `tarjetaProducto`, `filaCarrito` con `× cantidad`, `aviso` y `escaparTexto`.
- `js/main.js`: los tres datos del catálogo, `productosVisibles()` (estado derivado) y los cuatro listeners.

**Lo que se escribe durante la clase** (y por eso **no** está acá): `package.json`, `tsconfig.json`,
la carpeta `src/` con los archivos en `.ts`, `src/tipos.ts` con el contrato, y el **checkout** completo.

## Cómo verlo
Abrí `index.html` con **Live Server**. Y durante la clase, dejá una terminal con `npm run dev` corriendo:
cada vez que guardes un `.ts` se recompila solo. Si la página deja de actualizarse, casi siempre es que
esa terminal se cerró.

## Tareas para casa (5)

> Todas sobre **tu** proyecto. El criterio de entrega es objetivo: **`npx tsc --noEmit` en cero**.

1. **Fácil — tipar lo que quedó suelto.** Corré `npx tsc --noEmit` y arreglá todo lo que salga: `masCaroDe` y `conDescuento` en `carrito.ts`, `fichaProducto` en `ui.ts`, y los listeners donde `evento.target` sigue sin tipo. Pista: para el `target`, preferí `instanceof` antes que `as`.
2. **Intermedia 1 — el estado de carga, como tipo.** `let estado: EstadoCarga` y una función `pintarEstado()` que dibuje según el valor. La gracia: si agregás un cuarto estado y te olvidás de dibujarlo, que **el compilador te lo diga**. Buscá *exhaustiveness checking* y `never`.
3. **Intermedia 2 — `contarPorCategoria`, tipada.** Que la lateral diga "Laptops (5)". En JavaScript era un `reduce` con acumulador objeto; el retorno se escribe `Record<string, number>`. Pista: al acumulador del `reduce` hay que decirle su tipo.
4. **Difícil 1 — el detalle del producto.** Al hacer clic en una tarjeta (no en el botón), pedir `/products/{id}` y mostrar descripción, marca, valoración y stock. Hay que ampliar `ProductoAPI` y `mapearProducto`, y manejar cargando/error. **Ojo con el narrowing**: `descripcion` es opcional, así que TypeScript no te va a dejar usarla sin preguntar.
5. **Difícil 2 — "Mis pedidos", con su aduana.** El checkout guarda en `techcart_pedidos` y nadie lo mira. Listá cada pedido con número, fecha, cantidad y total, y adentro sus ítems. Tres condiciones: leer el `localStorage` con **`unknown`** y comprobar antes de confiar; **escapar** el nombre del cliente (lo escribió un usuario); y una función `pintarPedidos()` llamada al arrancar y tras confirmar.

## Lecturas adicionales
- **[TypeScript Playground](https://www.typescriptlang.org/play)** — escribí TS a la izquierda y mirá el JavaScript que sale. Media hora ahí enseña más que cualquier explicación.
- **Zod** — validación en **runtime** que además te genera el tipo. Es lo que resuelve de verdad las tres aduanas.
- **Utility types** — `Partial`, `Required`, `Readonly`, `Record`.
- **`enum` en TypeScript** — existe, pero hoy casi nadie lo usa: se prefieren las uniones de literales. Buscá por qué.
- **Type guards propios** — `function esProducto(x: unknown): x is Producto`.
- **`satisfies`** — cumplir un tipo sin perder la inferencia.

## Próxima clase (Clase 13)
**React + Vite + JSX**, en TypeScript. Arrancamos con `npm create vite@latest` y la plantilla de
**React + TypeScript**. Lo único genuinamente nuevo va a ser que una función pueda **devolver HTML** —
eso es JSX. Las props tipadas, los genéricos de `useState` y las uniones de estado ya los sabés leer.
