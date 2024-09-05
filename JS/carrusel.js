let index = 0;

function moverCarrusel(direccion) {
    const containerCarrusel = document.querySelector('.containerCarrusel');
    const imagenes = document.querySelectorAll('.containerCarrusel img');
    const totalImagenes = imagenes.length;

    index += direccion;
    if (index >= totalImagenes) index = 0;
    if (index < 0) index = totalImagenes - 1;

    containerCarrusel.style.transform = `translateY(-${index *20}%)`;
}
