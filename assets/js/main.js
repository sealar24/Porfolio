document.addEventListener('DOMContentLoaded', () => {
  const formularioContacto = document.getElementById('formulario-contacto');
  const elementoAviso = document.getElementById('aviso-formulario');

  if (formularioContacto) {
    formularioContacto.addEventListener('submit', (evento) => {
      evento.preventDefault();

      // 1. Obtener valores de los campos
      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if (!nombre || !correo || !mensaje) {
        mostrarAviso('Por favor, completa todos los campos del formulario.', true);
        return;
      }

      // 2. Crear objeto de datos con marca de tiempo
      const datosMensaje = {
        nombre,
        correo,
        mensaje,
        fechaHora: new Date().toLocaleString()
      };

      // 3. Persistir datos localmente (localStorage)
      ModuloAlmacenamiento.guardarMensaje(datosMensaje);

      // 4. (Opcional) Descargar copia en .txt
      ModuloAlmacenamiento.descargarComoTxt(datosMensaje);

      // 5. Limpiar formulario y notificar al usuario
      formularioContacto.reset();
      mostrarAviso(`¡Gracias ${nombre}! Tu mensaje ha sido guardado localmente y se generó una copia en .txt.`);
    });
  }

  function mostrarAviso(texto, esError = false) {
    elementoAviso.textContent = texto;
    elementoAviso.classList.remove('oculto');

    if (esError) {
      elementoAviso.style.color = '#f87171';
      elementoAviso.style.borderColor = '#f87171';
    } else {
      elementoAviso.style.color = 'var(--color-primario)';
      elementoAviso.style.borderColor = 'var(--color-primario)';
    }

    setTimeout(() => {
      elementoAviso.classList.add('oculto');
    }, 5000);
  }
  // Lógica del Menú Hamburguesa
const botonHamburguesa = document.getElementById('boton-hamburguesa');
const menuNavegacion = document.getElementById('menu-navegacion');
const enlacesNavegacion = document.querySelectorAll('.enlace-navegacion');

if (botonHamburguesa && menuNavegacion) {
  // Alternar apertura al hacer clic en la hamburguesa
  botonHamburguesa.addEventListener('click', () => {
    botonHamburguesa.classList.toggle('activo');
    menuNavegacion.classList.toggle('activo');
  });

  // Cerrar el menú automáticamente al tocar cualquier opción de navegación
  enlacesNavegacion.forEach(enlace => {
    enlace.addEventListener('click', () => {
      botonHamburguesa.classList.remove('activo');
      menuNavegacion.classList.remove('activo');
    });
  });
}

// --- LÓGICA DE TRANSICIÓN DE IMÁGENES EN PROYECTOS ---
document.querySelectorAll('.contenedor-carrusel').forEach(contenedor => {
  const diapositivas = contenedor.querySelectorAll('.imagen-diapositiva');
  const botonAnterior = contenedor.querySelector('.boton-anterior');
  const botonSiguiente = contenedor.querySelector('.boton-siguiente');
  let indiceActual = 0;

  function mostrarDiapositiva(indice) {
    diapositivas.forEach((diapositiva, i) => {
      diapositiva.classList.toggle('activo', i === indice);
    });
  }

  botonAnterior.addEventListener('click', () => {
    indiceActual = (indiceActual === 0) ? diapositivas.length - 1 : indiceActual - 1;
    mostrarDiapositiva(indiceActual);
  });

  botonSiguiente.addEventListener('click', () => {
    indiceActual = (indiceActual === diapositivas.length - 1) ? 0 : indiceActual + 1;
    mostrarDiapositiva(indiceActual);
  });
});

});
