# CineMatch

Sitio web estático para recomendar películas según:
- Género
- Estado de ánimo
- Duración

También permite:
- Elegir una recomendación al azar.
- Guardar favoritas en el navegador usando `localStorage`.
- Cambiar entre modo oscuro y claro.
- Usarse en computador, tablet o teléfono.

## Cómo abrirlo

No necesitas Node.js ni instalar nada.

1. Descomprime la carpeta.
2. Abre `index.html` en el navegador.

## Publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube `index.html`, `style.css` y `script.js`.
3. Ve a **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama `main` y la carpeta `/root`.
6. Guarda.

## Publicarlo en Railway

Al ser un sitio estático, lo más simple es usar GitHub Pages. Si quieres Railway, se puede agregar un pequeño servidor Node.js.

## Cómo modificar las películas

En `script.js`, cada película tiene esta estructura:

```js
{
  id: 1,
  title: "Interestelar",
  year: 2014,
  minutes: 169,
  genre: "Ciencia ficción",
  moods: ["emocionante", "reflexivo"],
  emoji: "🚀",
  colors: ["#3b2d6b", "#101827"],
  description: "..."
}
```

Puedes agregar tantas películas como quieras respetando la misma estructura.

## Próximo paso posible

La versión actual trabaja con una lista incluida en el proyecto. Una siguiente versión podría conectarse a una API de películas para obtener recomendaciones, posters, reparto, plataformas y estrenos de forma automática.
