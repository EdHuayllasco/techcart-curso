# Clase 1. La web y el HTML

En esta primera clase de TechCart entendemos cómo funciona la web y creamos el esqueleto
semántico de la tienda junto con su formulario de compra, usando solo HTML (aún sin CSS
ni JavaScript).

## Contenido de la carpeta

- `index.html`: el código que construimos en clase. Léelo con calma; cada parte tiene
  comentarios que explican la etiqueta o el atributo que se usa y por qué. Los ejercicios
  están al final del archivo.
- `Clase-01-diapositivas.pdf`: las diapositivas de la sesión.

## Lo que vimos

1. Cómo funciona la web: cliente y servidor, petición y respuesta, y los tres lenguajes
   del frontend (HTML, CSS y JavaScript).
2. HTML semántico: `header`, `nav`, `main`, `section`, `article`, `figure` y `footer`.
3. Formularios: `form`, `label`, `fieldset`/`legend`, `input`, `select`, `datalist`,
   `textarea` y botones de radio.
4. Validaciones nativas: `required`, `type="email"`, `pattern`, `minlength`. El navegador
   valida sin necesidad de JavaScript.

## Cómo ver la página

Abre la carpeta en tu explorador de archivos y haz doble clic en `index.html`. Si tienes
la extensión Live Server en VS Code, también puedes hacer clic derecho y elegir "Open with
Live Server". Prueba a enviar el formulario vacío para ver las validaciones del navegador.

## Ejercicios

Están dentro de `index.html`, al final del archivo, como comentarios. Se resuelven ahí
mismo y solo con lo visto en clase (HTML semántico y formularios).

1. Fácil. Agrega un quinto producto al catálogo copiando un `article` y cambiando sus datos.
2. Medio. Agrega al formulario un campo "Cantidad" (`type="number"` con `min`, `max` y
   `required`) y uno "Empresa" opcional (sin `required`).
3. Difícil. Crea una segunda página `nosotros.html` con estructura semántica completa y un
   formulario de contacto, y enlázala desde el `nav`.

## Entregar

```bash
git add .
git commit -m "clase 1: ejercicios resueltos"
git push
```

Siguiente clase: [Clase 2. Introducción a CSS](../clase-02/README.md)
