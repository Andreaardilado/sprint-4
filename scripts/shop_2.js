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

const productoPreCompra = {
    imagenes: {
       uno: "../images/Image 5.jpg",
       dos: "../images/Image 5.png",
       tres:"../images/Image 5 (1).png",
       cuatro: "../images/Image 5 (2).png"
    }
    
  };

const fotoDetalle = document.getElementById("detalles-izquierdo");
console.log(fotoDetalle);

const recorrerFotoDetalle = () => {
    fotoDetalle.innerHTML = productoPreCompra.map((imagen) => {
        `<a href="${imagen.imagenes}"> 
        <img class="izquierdo-detalles-fotos-column" src="${imagen.imagenes}" alt="">
        </a>`
    }).join("");
    return fotoDetalle;
}
recorrerFotoDetalle();


