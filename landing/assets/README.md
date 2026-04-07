# Assets del Hero KINETIC

## Imagen del hero

Guarda tu imagen aquí con el nombre exacto:

```
landing/assets/hero-kinetic.jpg
```

- **Formato**: JPG o PNG (el código apunta a `.jpg`; si usas PNG cambia el `src` en `index.html` línea del `<img>`)
- **Dimensiones recomendadas**: cuadrada o casi cuadrada, ~1200x1200 o superior
- **Tamaño**: idealmente < 500 KB (comprime con [tinypng.com](https://tinypng.com) o [squoosh.app](https://squoosh.app))

## Cómo subirla al repo

```bash
# Desde tu máquina local, con la imagen lista:
git checkout claude/add-skills-docs-zPapO
cp ~/Downloads/mi-foto.jpg landing/assets/hero-kinetic.jpg
git add landing/assets/hero-kinetic.jpg
git commit -m "Add hero image"
git push
```

## Fallback

Mientras no exista `hero-kinetic.jpg`, el hero carga una imagen temporal
desde Google Stitch como fallback (via `onerror` del `<img>`). En cuanto
subas la tuya, se usa automáticamente.

## Para Elementor

Si usas el archivo `elementor-embed.html`, la ruta `assets/hero-kinetic.jpg`
es **relativa** — cuando lo pegues en Elementor, sube la imagen a tu
Media Library de WordPress y reemplaza el `src` del `<img>` por la URL
absoluta que te dé WordPress (algo como `https://tudominio.com/wp-content/uploads/2026/04/hero-kinetic.jpg`).
