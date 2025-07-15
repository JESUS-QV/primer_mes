document.addEventListener('DOMContentLoaded', () => {
    const fotos = document.querySelectorAll('.foto');
    const fotoExpandida = document.querySelector('.foto-expandida');
    const imgExpandida = fotoExpandida.querySelector('img');
    const mensajeExpandido = fotoExpandida.querySelector('.mensaje');
    const cerrar = fotoExpandida.querySelector('.cerrar');

    // Mostrar foto al hacer clic
    fotos.forEach(foto => {
        foto.addEventListener('click', () => {
            imgExpandida.src = foto.src;
            mensajeExpandido.textContent = foto.dataset.mensaje;
            fotoExpandida.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    // Cerrar con botón
    cerrar.addEventListener('click', () => {
        fotoExpandida.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Cerrar al hacer clic fuera
    fotoExpandida.addEventListener('click', (e) => {
        if (e.target === fotoExpandida) {
            fotoExpandida.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const musica = document.getElementById('musica-fondo');
    musica.volume = 0.3; // Volumen del 0.0 al 1.0
});