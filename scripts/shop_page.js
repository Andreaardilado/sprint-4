import { productosShopPage } from "../modules/products.js";

// const contenedorProductos = document.getElementById("productos-shop-page");
const listaProductos = document.getElementById("lista-productos");
console.log(listaProductos);//capturamos la lista de productos del html

 //con .innerHTML remplazamos el contenido del HTML (por eso se toma el string)
  //.map rrecorre la lista y el primer parametro que recibe es una NUEVA lista
const poblarLista = () => {
  listaProductos.innerHTML  = productosShopPage.map((producto) => {
   return/*Hacemos retornar un string y cada item que queremos que se pinte lo asignamos ()por eso producto. + el elemento que queremos tomar de la lista*/`
    <a id=${producto.id} class="link_catalogo" href="#">
      <figure class="catalogo">
        <img class="fotos-catalogo" src="${producto.imagen}" alt="Collar gema">
        <figcaption id="12" class="referencia-producto">${producto.nombre}</figcaption>
        <figcaption class="precio">$${producto.precioUnitario}</figcaption>
      </figure>
    </a>  `
  }).join(""); //Lo convertimos en un solo elemento y por ende quita las comas.
  return listaProductos;
}
poblarLista();

const irADetalleProducto = () => {
  const cards = document.querySelectorAll(".link_catalogo");
  
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const productId = card.getAttribute("id");
      localStorage.setItem("productId", JSON.stringify(productId));
      location.href = "../pages/shop_2.html";
    })
  })
}

irADetalleProducto();

