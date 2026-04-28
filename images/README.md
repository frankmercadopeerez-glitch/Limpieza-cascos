# 📁 Carpeta de Imágenes — Santiago Buceo Profesional

Esta carpeta está destinada a las imágenes locales del sitio web.

**Actualmente el sitio usa imágenes de Pexels (CDN externo).** Puedes reemplazarlas con tus propias fotos reales del trabajo de Santiago.

---

## 🖼️ Imágenes a reemplazar

Cuando tengas fotos propias, renómbralas así y ponlas en esta carpeta:

| Archivo                    | Descripción                                      | Usada en                    |
| -------------------------- | ------------------------------------------------ | --------------------------- |
| `hero-bg.webp`             | Foto hero principal (buzo + barco, gran angular) | `index.html` — sección hero |
| `limpieza-casco.webp`      | Buzo limpiando el casco bajo el agua             | `services.html`             |
| `buceo-trabajo.webp`       | Santiago trabajando, posando con equipo          | `about.html`                |
| `velero-casco-limpio.webp` | Casco de velero limpio — resultado final         | `index.html` — horarios     |
| `santiago-perfil.webp`     | Foto del fundador, retrato profesional           | `about.html` — intro        |
| `casco-incrustado.webp`    | Casco con algas e incrustaciones (antes)         | `index.html` — por qué sec. |

---

## 🔧 Cómo reemplazar en el HTML

Busca la URL de Pexels y cámbiala por la ruta local. Ejemplo:

**Antes (Pexels CDN):**

```html
<img
  src="https://images.pexels.com/photos/3098965/pexels-photo-3098965.jpeg?auto=compress&cs=tinysrgb&w=1400"
/>
```

**Después (imagen local):**

```html
<img src="images/hero-bg.webp" />
```

---

## 📸 IDs de Pexels actualmente en uso

| Foto ID   | Descripción                     | Archivo HTML          |
| --------- | ------------------------------- | --------------------- |
| `3098965` | Buzo bajo yate                  | `index.html` hero     |
| `3046628` | Buzo trabajando                 | `services.html`       |
| `3113238` | Velero en marina al atardecer   | `index.html` horarios |
| `3098979` | Buzo bajo el agua, Mediterráneo | `about.html`          |
| `8826360` | Buzo con equipo, retrato        | `about.html` fundador |

---

## 📐 Tamaños recomendados para optimización web

| Tipo de imagen         | Resolución recomendada | Formato |
| ---------------------- | ---------------------- | ------- |
| Hero principal         | 1920 × 1080 px         | `.webp` |
| Sección con texto      | 900 × 700 px           | `.webp` |
| Foto retrato (persona) | 700 × 900 px           | `.webp` |
| Tarjetas / miniaturas  | 600 × 400 px           | `.webp` |

> 💡 Usa **WebP** siempre que sea posible — es el formato más eficiente para la web y está soportado por todos los navegadores modernos.
> Puedes convertir tus fotos en [squoosh.app](https://squoosh.app) (gratuito, online, sin instalar nada).
