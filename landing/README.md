# 47 Formatos Virales — Landing Marygene

Landing page responsive, interactiva y lista para subirse a Elementor.

## Archivos

| Archivo | Uso |
|---|---|
| `index.html` | Landing completa standalone (súbela a cualquier hosting) |
| `styles.css` | CSS con prefijo `.mg-` (no colisiona con temas WordPress) |
| `script.js` | Interacciones: reveal on scroll, counters, FAQ accordion, parallax |
| `elementor-embed.html` | **Bloque único** listo para pegar en Elementor |

## Cómo subirlo a Elementor

### Opción A — Widget HTML (recomendado, más rápido)

1. Edita tu página con Elementor.
2. Arrastra el widget **HTML** a la sección donde quieras la landing.
3. Abre `elementor-embed.html` y copia **todo su contenido**.
4. Pégalo dentro del widget HTML.
5. Haz clic en **Actualizar**.

Ya está. Todas las clases usan el prefijo `.mg-` y los estilos están
scopeados a `.mg-wrap` para no chocar con tu tema.

### Opción B — Página full-width con el HTML completo

1. En Elementor, crea una página nueva con el layout **Elementor Canvas**
   (sin header/footer del tema).
2. Usa la opción A dentro de esa página.

### Opción C — Hosting aparte (sin WordPress)

Sube `index.html`, `styles.css` y `script.js` a cualquier hosting estático
(Netlify, Vercel, Cloudflare Pages, hosting clásico) y apunta el dominio.

## Paleta de colores

- **Naranja** `#FF6B1A` — acentos y marca
- **Negro** `#0A0A0A` — tipografías y fondos contraste
- **Blanco** `#FFFFFF` — base
- **Verde vibrante** `#00D26A` — botones CTA (con pulse animation)

## Interacciones incluidas

- Fade-in secuencial al hacer scroll (IntersectionObserver)
- Contadores animados (47, stats)
- Hero con blobs flotantes y parallax por mouse
- Marquee infinito con nombres de formatos
- FAQ accordion (solo uno abierto a la vez)
- Sello de garantía girando
- Botones CTA con pulse animation
- Sticky CTA en móvil
- Respeta `prefers-reduced-motion`

## Personalizar textos

Todos los textos están en `index.html` (o el bloque `<body>` dentro de
`elementor-embed.html`). Busca y reemplaza directamente.

Para cambiar el link de compra, busca `href="#precio"` y `href="#"` en los
botones CTA y cámbialos por tu URL de checkout.
