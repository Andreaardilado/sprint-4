// Importar productosShopPage desde el módulo products.js
import { productosShopPage } from "../modules/products.js";

// Obtener el id del localStorage
const idProduct = JSON.parse(localStorage.getItem("productId"));

// Encontrar producto correspondiente al id
const productoId = () => productosShopPage.find((producto) => producto.id == idProduct);
const productoPreCompra = productoId();

// Llenar la sección de fotos del producto
const listaFotos = document.getElementById("detalles-izquierdo");
const recorrerFotoDetalle = () => {
    listaFotos.innerHTML = productoPreCompra.imagenes
        .map((imagen) => `<a href=""><img class="izquierdo-detalles-fotos-column" src="${imagen}" alt=""></a>`)
        .join("");
};
recorrerFotoDetalle();

// Llenar la sección de detalles del producto
const fotosDetalles = document.getElementById("detalles-izquierdo-1");
fotosDetalles.innerHTML = `<img class="izquierdo-detalles-fotos-row" src="${productoPreCompra.imagen}" alt="">`;

const nombreProducto = document.getElementById("detallesJoyas");
nombreProducto.innerHTML = `
    <h2 class="titulo">${productoPreCompra.nombre}</h2>
    <p class="codigo">${productoPreCompra.codigo}</p>
    <p class="precio">${productoPreCompra.precioUnitario}</p>
    <a class="seleccion-tonos" href="">Color-Rose Gold</a>
`;

// Colores
const listaColor = document.getElementById("coloresJoya");
listaColor.innerHTML = productoPreCompra.colores.map((color) => {
    const nombreColor = color.titulo || 'Color Predeterminado'; // Utilizar titulo en lugar de nombre
    return `<img class="tonos" src="${color.imagen}" alt="${nombreColor}" data-color="${nombreColor}"></img>`;
}).join("");

// Tallas
const listaTalla = document.getElementById("tallasBotones");
listaTalla.innerHTML = productoPreCompra.cantidadTalla.map((tallas) => {
    return `<button class="talla" data-talla="${tallas.talla}">${tallas.talla}</button>`;
}).join("");

// evento para colores
const colores = document.querySelectorAll('.tonos');
colores.forEach((color) => {
    color.addEventListener('click', function () {
        const colorSeleccionado = this.getAttribute('data-color');
        alert(`Color: ${colorSeleccionado}`);
    });
});

// evento para tallas
const tallas = document.querySelectorAll('.talla');
tallas.forEach((talla) => {
    talla.addEventListener('click', function () {
        const tallaSeleccionada = this.getAttribute('data-talla');
        alert(`Talla: ${tallaSeleccionada}`);
    
    });
});

// Manejador de eventos  botones de talla(consola)
const botonesTalla = document.querySelectorAll('.talla');
botonesTalla.forEach((boton) => {
    boton.addEventListener('click', function () {
        const tallaSeleccionada = this.getAttribute('data-talla');
        mostrarTalla(tallaSeleccionada);
    });
});

// Manejador de eventos para de colores (consola)
const imagenesColores = document.querySelectorAll('.tonos');
imagenesColores.forEach((imagen) => {
    imagen.addEventListener('click', function () {
        const colorSeleccionado = this.getAttribute('data-color');
        mostrarColor(colorSeleccionado);
    });
});

// Mostrar talla
function mostrarTalla(talla) {
    console.log(`Talla seleccionada: ${talla}`);
}

//Mostarr colores
function mostrarColor(color) {
    console.log(`Color seleccionado: ${color}`);
}
// Cantidades- variables
let cantidadActual = 1;
const cantidadElemento = document.querySelector('.uno'); // Elemento que muestra la cantidad

// Escuchador  sumar
document.querySelector('.mas').addEventListener('click', function () {
    cantidadActual++;
    actualizarCantidad();
});

// Escuchador restar
document.querySelector('.menos').addEventListener('click', function () {
    if (cantidadActual > 1) {
        cantidadActual--;
        actualizarCantidad();
    }
});

// Cantidades en la interfaz
function actualizarCantidad() {
    cantidadElemento.textContent = cantidadActual;
}

// Escuchador agregar a la bolsa
document.querySelector('.agregar-bolsa').addEventListener('click', function () {
    // Obtener la cantidad seleccionada
    const cantidadSeleccionada = cantidadActual;

    // Obtener información del producto seleccionado
    const productoSeleccionado = {
        id: productoPreCompra.id,
        nombre: productoPreCompra.nombre,
        precioUnitario: productoPreCompra.precioUnitario,
        cantidad: cantidadSeleccionada,
    };

    // Agregar el producto seleccionado al array de productos
    productosSeleccionados.push(productoSeleccionado);

    console.log(`Producto agregado ${cantidadSeleccionada} unidades.`);
    // Mensaje al usuario
    alert("¡Se han agregado sus productos exitosamente!");
});

// Escuchador comprar ahora
document.querySelector('.compar-ahora').addEventListener('click', function () {
    // Obtener información del producto seleccionado
    const productoSeleccionado = {
        id: productoPreCompra.id,
        nombre: productoPreCompra.nombre,
        precioUnitario: productoPreCompra.precioUnitario,
        cantidad: cantidadActual,
    };

    // Enviar a la página de terminación de orden con la información del producto
    window.location.href = `../pages/payment.html?producto=${encodeURIComponent(JSON.stringify(productoSeleccionado))}`;
});


// Escuchador comprar ahora
document.querySelector('.compar-ahora').addEventListener('click', function () {
    // Información del producto
    const nombreProducto = this.getAttribute('data-nombre');
    const precioProducto = this.getAttribute('data-precio');
    const cantidadSeleccionada = cantidadActual;
    // lleva  a pasarela de pago con la información del producto y la cantidad
    console.log(`Redirigiendo a la pasarela de pago con ${cantidadSeleccionada} unidades de ${nombreProducto} a $${precioProducto} cada uno.`);
});

//  Botón de comprar ahora
document.querySelector('.compar-ahora').addEventListener('click', function () {
    // Información del producto
    const nombreProducto = productoPreCompra.nombre;
    const precioProducto = productoPreCompra.precioUnitario;
    const cantidadSeleccionada = cantidadActual;

    // Envia la página de pago
    window.location.href = `../pages/payment.html?producto=${nombreProducto}&precio=${precioProducto}&cantidad=${cantidadSeleccionada}`;
});
