// Manejar el envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Muestra un mensaje de confirmación
    const respuesta = document.getElementById('respuesta');
    respuesta.style.display = 'block';
    respuesta.textContent = '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.';

    // Resetea el formulario
    this.reset();
});

