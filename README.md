# Porfolio
Porfolio de presentación personal 
se uso la versión gratuita de Gemini como ayuda de "IA" 
los promts solicitados con las respuestas se detallan a continuacion:
1. Estructura y Maquetación Base
Prompt del usuario:

"necesito armar una landing page en HTML, CSS y JS con maquetación moderna, secciones semánticas y formulario de contacto"

Resumen de la respuesta:
Se estructuró un archivo index.html utilizando HTML5 semántico (<header>, <main>, <section>, <article>, <footer>). Se organizó el contenido en las secciones principales: Hero/Presentación, Sobre Mí, Habilidades Técnicas, Áreas de Interés y Formulario de Contacto.

2. Diseño Visual y Estilos Adaptativos (CSS)
Prompt del usuario:

"como puedo armar los estilos con Flexbox para que se vea bien en escritorio y sea totalmente responsive"

Resumen de la respuesta:
Se desarrollaron las hojas de estilo (reset.css y style.css) implementando Flexbox para la alineación de tarjetas (cards), variables CSS para la paleta de colores y Media Queries para adaptar los contenedores en pantallas de escritorio, tablets y móviles.

3. Interactividad y Persistencia Local (JavaScript)
Prompt del usuario:

"necesito capturar los datos del formulario de contacto, guardarlos localmente y dar feedback al usuario"

Resumen de la respuesta:
Se creó la lógica JS dividida en módulos (storage.js y main.js). Se implementó la captura del evento submit, validación de campos vacíos, almacenamiento de mensajes en localStorage y la generación automática de un archivo .txt descargable como copia del mensaje.

4. Navegación Móvil (Menú Hamburguesa)
Prompt del usuario:

"se podria mantener el logo cuando se lo ve desde un celular?? o generar un menú hamburguesa??"

Resumen de la respuesta:
Se integró un botón de menú hamburguesa accesible en el <header>. Se añadieron reglas de CSS para ocultar la lista de navegación fuera de pantalla en dispositivos móviles y un script en JS que conmuta la clase .active al hacer clic en el botón o en cualquiera de las opciones del menú.

5. Depuración y Maquetación del Header
Prompt del usuario:

"bien veo el menú hamburguesa pero no se despliega... creo que por aca esta el error" (Acompañado del código HTML)

Resumen de la respuesta:
Se corrigió el enlace entre la interfaz y el script asignando el atributo id="nav-menu" a la etiqueta <nav>. Además, se ajustaron las propiedades de Flexbox (justify-content: space-between) para mantener el logo visible a la izquierda y el botón a la derecha sin desbordamientos.
