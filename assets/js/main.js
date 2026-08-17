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
  // Lógica del Menú Hamburguesa
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburgerBtn && navMenu) {
  // Alternar apertura al hacer clic en la hamburguesa
  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Cerrar el menú automáticamente al tocar cualquier opción de navegación
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// --- LÓGICA DE TRANSICIÓN DE IMÁGENES EN PROYECTOS ---
document.querySelectorAll('.slider-container').forEach(container => {
  const slides = container.querySelectorAll('.slide-img');
  const prevBtn = container.querySelector('.prev-btn');
  const nextBtn = container.querySelector('.next-btn');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  });
});

});