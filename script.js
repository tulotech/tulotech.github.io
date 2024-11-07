// Agregar animación de aparición a las secciones
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight;
    sections.forEach(function(section) {
        if (scrollPosition > section.offsetTop + 100) {
            section.classList.add('visible');
        }
    });
});
