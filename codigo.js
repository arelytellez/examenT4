// Mensajes aleatorios de bienvenida
const mensajes = [
    "¡Hoy es un gran día para disfrutar buena comida!",
    "Solo hoy, desayunos al 2x1.",
    "¡Disfruta cada bocado como si fuera el mejor!",
    "La comida sabe mejor cuando se comparte."
];

// Datos del menú con imágenes
const menuItems = {
    desayuno: [{ nombre: "Chilaquiles", precio: "$120", imagen: "imagenes/chilaquiles.jpg" }, { nombre: "Hotcakes", precio: "$100", imagen: "imagenes/hotcakes.jpg" }],
    comida: [{ nombre: "Mole con Pollo", precio: "$150", imagen: "imagenes/mole.jpg" }, { nombre: "Carne de res", precio: "$90", imagen: "imagenes/carne.jpg" }],
    cena: [{ nombre: "Pavo", precio: "$110", imagen: "imagenes/pavo.jpg" }, { nombre: "Ensalada de Manzana", precio: "$130", imagen: "imagenes/ensalada.jpg" }],
    brunch: [{ nombre: "Croissant con Jamón", precio: "$85", imagen: "imagenes/crossant.jpg" }, { nombre: "Waffle", precio: "$95", imagen: "imagenes/waffle.jpg" }]
};

// Inicializa la bienvenida y muestra un mensaje motivador al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    let bienvenida = document.getElementById("bienvenida");
    let fechaHora = document.createElement("span");
    fechaHora.textContent = ` ${new Date().toLocaleString()} `;
    let mensajeMemorable = document.createElement("span");
    mensajeMemorable.textContent = " ¡Buen provecho!";
    mensajeMemorable.style.color = "goldenrod";

    bienvenida.innerHTML = "Bienvenido a Restaurante Gourmet";
    bienvenida.appendChild(fechaHora);
    bienvenida.appendChild(mensajeMemorable);

    mostrarMensajeAleatorio();
});

// Actualiza la bienvenida y cambia el mensaje motivador aleatoriamente
function actualizarBienvenida() {
    let bienvenida = document.getElementById("bienvenida");
    bienvenida.innerHTML = "¡Esperamos que disfrutes tu visita!";
    
    let mensajeExtra = document.getElementById("mensajeExtra");
    mensajeExtra.innerHTML = "Gracias por visitarnos";
    mensajeExtra.style.fontStyle = "italic";
    mensajeExtra.style.color = "green";

    mostrarMensajeAleatorio();
}

// Muestra el menú de la categoría seleccionada con imagen
function mostrarMenu(categoria) {
    let menu = document.getElementById("menu");
    menu.innerHTML = `<h3>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h3>`;

    menuItems[categoria].forEach(plato => {
        let item = document.createElement("p");
        item.textContent = `${plato.nombre} - ${plato.precio}`;
        
        let imagen = document.createElement("img");
        imagen.src = plato.imagen;
        imagen.alt = plato.nombre;
        imagen.className = "menu-img";
        
        menu.appendChild(item);
        menu.appendChild(imagen);
    });

    mostrarMensajeAleatorio();
}

// Muestra un mensaje aleatorio en la página
function mostrarMensajeAleatorio() {
    let mensajeExtra = document.getElementById("mensajeExtra");
    mensajeExtra.innerHTML = mensajes[Math.floor(Math.random() * mensajes.length)];
}