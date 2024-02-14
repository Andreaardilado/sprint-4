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

// Colores y Tallas
const listaColorYTalla = document.getElementById("coloresJoya");
listaColorYTalla.innerHTML = productoPreCompra.colores.map((color) => {
    const nombreColorTalla = color.titulo || 'Color Predeterminado'; // Utilizar titulo en lugar de nombre
    return `<img class="tonos" src="${color.imagen}" alt="${nombreColorTalla}" color="${nombreColorTalla}"></img>`;
}).join("") +
productoPreCompra.cantidadTalla.map((tallas) => {
    return `<button class="talla" talla="${tallas.talla}">${tallas.talla}</button>`;
}).join("");

// evento para colores y tallas
const coloresYTallas = document.querySelectorAll('.tonos, .talla');
coloresYTallas.forEach((elemento) => {
    elemento.addEventListener('click', function () {
        const atributo = elemento.classList.contains('tonos') ? 'color' : 'talla';
        const seleccionado = elemento.getAttribute(atributo);
        mostrarSeleccionado(atributo, seleccionado);
    });
});

// Mostrar color o talla
function mostrarSeleccionado(atributo, seleccionado) {
    console.log(`${atributo.charAt(0).toUpperCase() + atributo.slice(1)} seleccionado: ${seleccionado}`);
    alert(`${atributo.charAt(0).toUpperCase() + atributo.slice(1)} seleccionado: ${seleccionado}`);
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

    // Inicializar el array para productos seleccionados
    let productosSeleccionados = [];

    // Agregar el producto seleccionado al array de productos
    productosSeleccionados.push(productoSeleccionado);

    console.log(`Unidades seleccionadas ${cantidadSeleccionada}.`);
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

document.addEventListener('DOMContentLoaded', function () {
    // Obtener el array de productos seleccionados del localStorage
    const productosSeleccionados = JSON.parse(localStorage.getItem("productosSeleccionados")) || [];

    // Iterar sobre los productos seleccionados 
    productosSeleccionados.forEach(producto => {
        
        mostrarProductoSeleccionado(producto);
    });
});

// Función para mostrar el producto como seleccionado
function mostrarProductoSeleccionado(producto) {
   
    const productoElemento = document.getElementById(producto.id);

    if (productoElemento) {
       
        productoElemento.classList.add('producto-seleccionado');
    }
}



    