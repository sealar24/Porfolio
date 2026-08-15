document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const feedbackElement = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // 1. Obtener valores de los campos
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        showFeedback('Por favor, completa todos los campos del formulario.', true);
        return;
      }

      // 2. Crear objeto de datos con marca de tiempo
      const submissionData = {
        name,
        email,
        message,
        timestamp: new Date().toLocaleString()
      };

      // 3. Persistir datos localmente (localStorage)
      StorageModule.saveSubmission(submissionData);

      // 4. (Opcional) Descargar copia en .txt
      StorageModule.downloadAsTxtFile(submissionData);

      // 5. Limpiar formulario y notificar al usuario
      contactForm.reset();
      showFeedback(`¡Gracias ${name}! Tu mensaje ha sido guardado localmente y se generó una copia en .txt.`);
    });
  }

  function showFeedback(text, isError = false) {
    feedbackElement.textContent = text;
    feedbackElement.classList.remove('hidden');
    
    if (isError) {
      feedbackElement.style.color = '#f87171';
      feedbackElement.style.borderColor = '#f87171';
    } else {
      feedbackElement.style.color = 'var(--color-primary)';
      feedbackElement.style.borderColor = 'var(--color-primary)';
    }

    setTimeout(() => {
      feedbackElement.classList.add('hidden');
    }, 5000);
  }
});