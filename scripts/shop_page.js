import { productosShopPage } from "../modules/products.js";


//Filtrar productos buscados
document.addEventListener('DOMContentLoaded', function () {
  const productos = document.querySelectorAll('.catalogo');
  document.getElementById('buscador').addEventListener('input', function () {
    const resultadoBusqueda = this.value.toLowerCase();
    productos.forEach(producto => {
      const nombreProducto = producto.querySelector('.referencia-producto').textContent.toLowerCase();
      if (nombreProducto.includes(resultadoBusqueda)) {
        producto.style.display = 'block';
      } else {
        producto.style.display = 'none';
      }
    });
  });
});

const listaProductos = document.getElementById("lista-productos");


//Función poblarLista que utiliza la información de productosShopPage para generar y mostrar dinámicamente la lista de productos en el elemento con ID "lista-productos" en la página

const poblarLista = () => {
  listaProductos.innerHTML = productosShopPage.map((producto) => {
    return `
      <a id=${producto.id} class="link_catalogo" href="#">
        <figure class="catalogo">
          <img class="fotos-catalogo" src="${producto.imagen}" alt="Collar gema">
          <figcaption id="${producto.id}" class="referencia-producto">${producto.nombre}</figcaption>
          <figcaption class="precio">$${producto.precioUnitario.toFixed(2)}</figcaption>
        </figure>
      </a>`;
  }).join("");
  return listaProductos;
}

poblarLista();

//redireccionar a la página de detalle del producto
const irADetalleProducto = () => {
  const cards = document.querySelectorAll(".link_catalogo");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const productId = card.getAttribute("id");
      localStorage.setItem("productId", JSON.stringify(productId));
      location.href = "../pages/shop_2.html";
    });
  });
}

irADetalleProducto();

//Función para ordenar productos por precio

const ordenar = (productos, ascendente = true) => {
  return [...productos].sort((a, b) =>
    ascendente
      ? a.precioUnitario - b.precioUnitario
      : b.precioUnitario - a.precioUnitario
  );
};

console.log("Descendente: ", ordenar(productosShopPage, false));
console.log("Ascendente: ", ordenar(productosShopPage));

document.getElementById('ordenPrecioSelect').addEventListener('change', function () {
  const opcionSeleccionada = parseInt(this.value);

  switch (opcionSeleccionada) {
    case 1:
      actualizarListaProductos(productosShopPage);
      break;
    case 2:
      const productosOrdenadosDescendente = ordenar(productosShopPage, false);
      actualizarListaProductos(productosOrdenadosDescendente);
      break;
    case 3:
      const productosOrdenadosAscendente = ordenar(productosShopPage);
      actualizarListaProductos(productosOrdenadosAscendente);
      break;
    default:
      break;
  }
});

const actualizarListaProductos = (productos) => {
  listaProductos.innerHTML = "";
  productos.forEach((producto) => {
    const productoHTML = `
      <a id=${producto.id} class="link_catalogo" href="#">
        <figure class="catalogo">
          <img class="fotos-catalogo" src="${producto.imagen}" alt="${producto.nombre}">
          <figcaption id="${producto.id}" class="referencia-producto">${producto.nombre}</figcaption>
          <figcaption class="precio">$${producto.precioUnitario.toFixed(2)}</figcaption>
        </figure>
      </a>`;
    listaProductos.innerHTML += productoHTML;
  });
};


// Escuchador de eventos para producto seleccionado
// document.addEventListener('DOMContentLoaded', function () {
//   const botonSeleccionar = document.getElementById('pintarSeleccionados');

//   if (botonSeleccionar) {
//       botonSeleccionar.addEventListener('click', function () {
//           const elementosSeleccionados = document.querySelectorAll('.producto-seleccionado');

//           elementosSeleccionados.forEach(elemento => {
//               elemento.style.backgroundColor = 'lightblue'; 
//           });
//       });
//   } else {
//       console.error('No se encontró en el DOM.');
//   }
// });