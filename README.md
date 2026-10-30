# LPSS · Los Patagones Story Studio — Next.js

Proyecto Next.js (App Router, JavaScript). Mismo diseño que la versión estática.

## Probarlo en tu PC
1. Instalá Node.js (versión 20 o más nueva).
2. En esta carpeta: `npm install` y después `npm run dev`.
3. Abrí http://localhost:3000

## Publicarlo en Vercel
- Lo más seguro: subilo a un repositorio NUEVO (o a una rama nueva del actual) y conectalo en Vercel. Así no pisás lo que ya está publicado.
- Si lo ponés en tu repositorio actual, esta carpeta reemplaza `app/`, `public/`, `package.json` y `next.config.mjs`. Hacé una copia antes.

## Dónde está cada cosa
- `app/body.html` el contenido de la página (textos, secciones, lista de panorámicas del fondo).
- `app/globals.css` los estilos.
- `app/Site.js` la lógica (carrusel, menú del celular, calcos, provincias, países). Arriba está `SITIO`, con los datos que ve el público.
- `app/layout.js` título, descripción, ícono e imagen para compartir.
- `public/images/` todas las imágenes: `panoramicas/`, `calcos/`, `flags/` (13 banderas PNG), logo, Jubilaneta, equipo.

## Modo edición (solo para vos)
Entrá a `/#editar`. Podés sumar calcos y vínculos (🔗), marcar provincias y sumar países (se eligen de una lista). Tocá "Copiar datos" y pegalos en `SITIO` (en `app/Site.js`) para que queden para todos. "Salir" vuelve a la vista pública.

## Panorámicas
Se recorren completas de derecha a izquierda y se mezclan entre sí. Para sumar una: ponela en `public/images/panoramicas/` (horizontal, larga, sin texto, ~300 KB) y agregala como primera en la lista `<div class="pan">` de `app/body.html`. Velocidad: `SPEED` en `app/Site.js` (más número = más rápido).

## Pendiente antes de publicar
- Agregar los vínculos definitivos de cada calco.
- Confirmar que el teléfono y el correo de contacto siguen vigentes.
- Probar la compilación con `npm install` y `npm run build`.
- Publicar primero en una rama o proyecto de prueba, sin reemplazar la versión activa.
- La sección de privacidad ya está incluida.
- Los cambios hechos en modo edición se guardan en el navegador; para que sean públicos hay que copiar los datos y actualizar `SITIO` en `app/Site.js`.
