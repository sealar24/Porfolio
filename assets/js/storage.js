/**
 * Módulo para gestionar la persistencia de datos local.
 */
const StorageModule = {
  
  // Clave interna para identificar los datos en el navegador
  STORAGE_KEY: 'portfolio_contact_submissions',

  /**
   * Guarda un nuevo mensaje en localStorage
   * @param {Object} data - Objeto con {name, email, message, timestamp}
   */
  saveSubmission(data) {
    const existingData = this.getAllSubmissions();
    existingData.push(data);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existingData));
  },

  /**
   * Obtiene todos los mensajes guardados
   * @returns {Array} Lista de mensajes
   */
  getAllSubmissions() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  /**
   * Genera y descarga un archivo .txt con los datos ingresados
   * @param {Object} data - Datos del mensaje enviado
   */
  downloadAsTxtFile(data) {
    const fileContent = `--- NUEVO MENSAJE DE CONTACTO ---\n` +
                        `Fecha: ${data.timestamp}\n` +
                        `Nombre: ${data.name}\n` +
                        `Email: ${data.email}\n` +
                        `Mensaje:\n${data.message}\n` +
                        `---------------------------------\n`;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `contacto_${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
  }
};