document.addEventListener('DOMContentLoaded', () => {
    // Manejo de fotos flotantes
    const fotos = document.querySelectorAll('.foto');
    const fotoExpandida = document.querySelector('.foto-expandida');
    const imgExpandida = fotoExpandida.querySelector('img');
    const mensajeExpandido = fotoExpandida.querySelector('.mensaje');
    const cerrar = fotoExpandida.querySelector('.cerrar');

    fotos.forEach(foto => {
        foto.addEventListener('click', () => {
            imgExpandida.src = foto.src;
            mensajeExpandido.textContent = foto.dataset.mensaje;
            fotoExpandida.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    cerrar.addEventListener('click', () => {
        fotoExpandida.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    fotoExpandida.addEventListener('click', (e) => {
        if (e.target === fotoExpandida) {
            fotoExpandida.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Manejo del audio
    const btnMusica = document.getElementById('activar-musica');
    const musica = document.getElementById('musica-fondo');
    musica.volume = 0.3; // Volumen suave

    btnMusica.addEventListener('click', () => {
        musica.play().then(() => {
            btnMusica.style.display = 'none';
        }).catch(err => {
            console.log("Error al reproducir música:", err);
        });
    });
});