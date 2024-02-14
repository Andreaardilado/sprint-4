import { productosShopPage } from "../modules/products.js";

// Capturar botón carrito de compras
const botonCart = document.getElementById("carroModal");

// Función mostrar carro
const showcart = (button) => {
    // Escuchador evento
    button.addEventListener("click", (event) => {
        event.preventDefault(); // Evita la recarga de la página

        // Crear la carta si no existe con .createElement
        if (!document.querySelector(".modal")) {
            const modalContainer = document.createElement("div");
            modalContainer.classList.add("modal");
            modalContainer.innerHTML = `
                <section>
                    <button id="closeModal">X</button>
                    <span>contenido</span>
                </section>
            `;
            document.body.appendChild(modalContainer);
        }

        const capturamodal = document.querySelector(".modal");
        capturamodal.classList.remove("hidden");
        capturamodal.classList.add("show");
    });
}

// Función para cerrar carro
const closecart = () => {
    document.addEventListener("click", (event) => {
        if (event.target.id === "closeModal") {
            const capturamodal = document.querySelector(".modal");
            capturamodal.classList.toggle("hidden");
            capturamodal.classList.toggle("show");
        }
    });
}

showcart(botonCart);
closecart();





   




