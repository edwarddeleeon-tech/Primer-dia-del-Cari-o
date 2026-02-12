// Listas de personalización
const frases = [
    "¡Eres la Mas Hermosa Amor! ✨",
    "Te Amo Mucho Chapatia❤️",
    "Eres mi paz y mi alegria🌹",
    "Contigo Todo Es Mejor😊",
    "Eres la mejor parte de mi dia☀️",
    "Quiero toda una vida a tu lado ✨",
    "¡Feliz día Mi Preciosa! 🌸"
];

const tiposFlores = ["🌹", "🌸", "🌷", "🌺", "🌻", "🌼"];

// Escuchar el clic en todo el documento
document.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    crearFlor(x, y);
    crearMensaje(x, y);
});

function crearFlor(x, y) {
    const flor = document.createElement('div');
    flor.className = 'flower';
    flor.style.left = x + 'px';
    flor.style.top = y + 'px';
    
    // Elegir emoji aleatorio
    const emoji = tiposFlores[Math.floor(Math.random() * tiposFlores.length)];
    flor.innerText = emoji;

    document.body.appendChild(flor);

    // Opcional: Borrar la flor después de 10 segundos para no saturar
    setTimeout(() => {
        flor.style.transition = "opacity 1s";
        flor.style.opacity = "0";
        setTimeout(() => flor.remove(), 1000);
    }, 10000);
}

function crearMensaje(x, y) {
    const msj = document.createElement('div');
    msj.className = 'message';
    msj.style.left = x + 'px';
    msj.style.top = (y - 40) + 'px'; // Aparece un poco arriba del clic
    
    const texto = frases[Math.floor(Math.random() * frases.length)];
    msj.innerText = texto;

    document.body.appendChild(msj);

    // Eliminar el mensaje después de que termine la animación
    setTimeout(() => {
        msj.remove();
    }, 2500);
}
