# Proyecto: Porfolio personal (Primera Entrega – Front End)

## Descripción
- Landing page de portafolio personal: presentación (hero), sobre mí, habilidades, trabajos, proyectos y formulario de contacto.
- El formulario guarda los mensajes en localStorage y descarga una copia en .txt.
- Público / cliente: docentes de la cátedra.

## Idioma de los nombres
- Español (variables, clases, atributos y métodos; los comentarios siempre en español)

## Stack
- HTML5, CSS3, JavaScript ES6+ sin frameworks
- Librerías CSS: ninguna (fuente Poppins desde Google Fonts)
- Librerías JS: ninguna
- Herramientas: Live Server (VS Code)

## Cómo se ejecuta
- Desarrollo: abrir `index.html` con Live Server
- Build: no aplica

## Estructura del proyecto
- `index.html`: página principal (única).
- `assets/css/`: `reset.css` + `style.css` (estilos generales).
- `assets/js/`: `storage.js` (persistencia en localStorage y descarga .txt) + `main.js` (formulario, menú hamburguesa, slider de proyectos). `storage.js` se carga antes que `main.js`.
- `assets/img/`: imágenes; capturas de proyectos en `gestionClub/` y `gestionDistribuidora/`.
- Carpetas que no se deben modificar: ninguna; en el código existente solo se cambian los nombres de inglés a español, si existen.

## Documentación de análisis
- La consigna está en: `pfo1-consigna-2026.pdf` (raíz del proyecto).
- Leerla antes de cualquier desarrollo y ceñirse a ella (ver regla global).
- El `README.md` documenta los prompts de IA usados; agregar ahí cada nuevo uso de IA.

## HTML
- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `footer` en lugar de `div` genéricos.
- Toda imagen lleva `alt` descriptivo.
- `lang="es"` en la etiqueta `html`.
- Sin estilos en línea (`style="..."`) ni JS en línea (`onclick="..."`).

## CSS
- Clases en kebab-case: `tarjeta-proyecto`, `menu-principal`.
- Metodología: ninguna (sin BEM).
- Colores, fuentes y transiciones como variables en `:root` (`--color-primario`).
- Diseño responsive: desktop first; breakpoint: `max-width: 768px`.
- Layout con Flexbox.
- No usar `!important` salvo justificación.

## JavaScript
- Seguir las convenciones JS de las reglas globales.
- Scripts al final del `body`.
- Manipulación del DOM con `querySelector` / `getElementById` / `addEventListener`.

## Compatibilidad
- Navegadores objetivo: Chrome, Firefox, Edge, Safari: últimas 2 versiones

## Dependencias
- No agregar librerías ni CDNs nuevos sin consultar.

## Prohibiciones específicas
- Es solo una landing page: no agregar páginas adicionales ni backend.
