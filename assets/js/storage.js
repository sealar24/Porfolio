/**
 * Módulo para gestionar la persistencia de datos local.
 */
const ModuloAlmacenamiento = {

  // Clave interna para identificar los datos en el navegador
  CLAVE_ALMACENAMIENTO: 'mensajes_contacto_porfolio',

  /**
   * Guarda un nuevo mensaje en localStorage
   * @param {Object} datos - Objeto con {nombre, correo, mensaje, fechaHora}
   */
  guardarMensaje(datos) {
    const mensajesGuardados = this.obtenerMensajes();
    mensajesGuardados.push(datos);
    localStorage.setItem(this.CLAVE_ALMACENAMIENTO, JSON.stringify(mensajesGuardados));
  },

  /**
   * Obtiene todos los mensajes guardados
   * @returns {Array} Lista de mensajes
   */
  obtenerMensajes() {
    const datos = localStorage.getItem(this.CLAVE_ALMACENAMIENTO);
    return datos ? JSON.parse(datos) : [];
  },

  /**
   * Genera y descarga un archivo .txt con los datos ingresados
   * @param {Object} datos - Datos del mensaje enviado
   */
  descargarComoTxt(datos) {
    const contenidoArchivo = `--- NUEVO MENSAJE DE CONTACTO ---\n` +
                        `Fecha: ${datos.fechaHora}\n` +
                        `Nombre: ${datos.nombre}\n` +
                        `Email: ${datos.correo}\n` +
                        `Mensaje:\n${datos.mensaje}\n` +
                        `---------------------------------\n`;

    const archivo = new Blob([contenidoArchivo], { type: 'text/plain;charset=utf-8' });
    const enlace = document.createElement('a');
    enlace.href = URL.createObjectURL(archivo);
    enlace.download = `contacto_${Date.now()}.txt`;
    enlace.click();
    URL.revokeObjectURL(enlace.href);
  }
};
