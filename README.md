# Pilar Nieto Pérez — Asesoría Fiscal

Web personal de Pilar Nieto Pérez, asesora fiscal en Valencia. Construida con [Astro](https://astro.build), en 4 idiomas: español (por defecto), inglés, catalán y ruso.

## Estructura

```
src/
├── components/
│   ├── PageHeader.astro         # cabecera de sección (eyebrow + título)
│   └── pages/                   # el contenido real de cada página, con textos en los 4 idiomas
│       ├── HomePage.astro
│       ├── SobreMiPage.astro
│       ├── ServiciosPage.astro
│       ├── ContactoPage.astro
│       └── AvisoLegalPage.astro
├── icons/                       # SVGs (email, LinkedIn)
├── layouts/
│   └── Layout.astro             # cabecera, navegación, pie de página
├── lib/
│   └── i18n.ts                  # idiomas, textos de navegación/pie, rutas
├── pages/                       # rutas reales del sitio (una por idioma)
│   ├── index.astro, sobre-mi.astro, servicios.astro, contacto.astro, aviso-legal.astro
│   ├── en/    (mismas páginas en inglés)
│   ├── ca/    (mismas páginas en catalán)
│   └── ru/    (mismas páginas en ruso)
└── styles/
    └── global.css                # paleta, tipografías, componentes base
```

## Cómo editar los textos

Todo el texto visible está en los archivos de `src/components/pages/*.astro`, dentro de un objeto `UI` con una clave por idioma (`es`, `en`, `ca`, `ru`). Busca el texto que quieras cambiar y edítalo directamente ahí — no hace falta tocar nada más.

## Comandos

| Comando           | Qué hace                                    |
| ------------------ | -------------------------------------------- |
| `npm install`       | Instala las dependencias                     |
| `npm run dev`        | Levanta el servidor local en `localhost:4321` |
| `npm run build`       | Genera la versión de producción en `./dist/` |
| `npm run preview`      | Previsualiza el build de producción localmente |

## Antes de publicarla

- **Formulario de contacto:** consigue una clave gratuita en [web3forms.com](https://web3forms.com) (solo con el email de Pilar) y pégala en `WEB3FORMS_ACCESS_KEY`, dentro de `src/components/pages/ContactoPage.astro`. Sin una clave válida, el formulario no envía.
- **Ubicación:** en ese mismo archivo, ajusta `ADDRESS` y `MAP_QUERY` con la dirección real en Valencia (o elimina la sección `.location` si no hay despacho físico).
- Cambia `site` en `astro.config.mjs` por tu dominio definitivo (ahora apunta a `https://pilarnietofiscal.com`).
- Revisa `src/components/pages/AvisoLegalPage.astro`: es un modelo básico y te recomiendo que lo valide un profesional del derecho antes de publicar la web.
- Los recursos de marca (logo, foto, favicon e imagen para compartir) están en `public/`.
