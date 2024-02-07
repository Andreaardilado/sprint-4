import { productosShopPage } from "../modules/products.js";

/*const rutaShop_2Page = [
    {
        inicio: "Home",
        tienda: "Shop",
        nombre: "Luxury Charms"
    }
]

const pre_compra = document.getElementById("rutaPreCompra");
console.log(pre_compra);

const llenarRuta = () =>{
    pre_compra.innerHTML = rutaShop_2Page.map((ruta) => {
    return `
        <a href="../pages/home_page.html" class="ruta-pre-compra-a">${ruta.inicio}</a>
        <img src="../images/Arrow forward ios 1.jpg" alt="arrow forward">
        <a href="../pages/shop_page.html" class="ruta-pre-compra-a">${ruta.tienda}</a>
        <img src="../images/Arrow forward ios 1 (1).jpg" alt="arrow forward">
        <a href="../pages/shop_2.html" class="ruta-pre-compra-a">${ruta.nombre}</a>
 `
}).join("");
return pre_compra;
}
llenarRuta();*/

const idProduct = JSON.parse(localStorage.getItem("productId"));

const productoId = () => productosShopPage.find((producto) => producto.id == idProduct);
const productoPreCompra = productoId();



const listaFotos = document.getElementById("detalles-izquierdo");

const recorrerFotoDetalle = () => {
  listaFotos.innerHTML = productoPreCompra.imagenes
    .map((imagen) => {
      return `<a href=""> 
      <img class="izquierdo-detalles-fotos-column" src="${imagen}" alt="">
    </a>`;
    })
    .join("");
};

recorrerFotoDetalle();

const fotosDetalles = document.getElementById("detalles-izquierdo-1");
fotosDetalles.innerHTML = `<img class="izquierdo-detalles-fotos-row" src="${productoPreCompra.imagen}" alt="">`;

const nombreProducto = document.getElementById("detallesJoyas");
nombreProducto.innerHTML = `<h2 class="titulo">${productoPreCompra.nombre}</h2>
  <p class="codigo">${productoPreCompra.codigo}</p>
                        <p class="precio">${productoPreCompra.precioUnitario}</p>
                        <a class="seleccion-tonos" href="">Color-Rose Gold</a>`;

const listaColor = document.getElementById("coloresJoya");
 listaColor.innerHTML = productoPreCompra.colores.map((color)=>{
  return `<img class="tonos" src="${color.imagen}" alt=""></img>`
 }).join("");

const listaTalla = document.getElementById("tallasBotones");
listaColor.innerHTML = productoPreCompra.cantidadTalla.map ((tallas)=>{
  return `<button class="talla">${tallas.talla}</button>`
}).join("");
