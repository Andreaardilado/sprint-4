const productosShopPage = [
  {
    id: 12,
    nombre: "Luxury Gems Necklace",
    codigo: "N0123",
    precioUnitario: 168.76,
    tipoAccesorio: "Necklace",
    imagenes: "../images/Luxury Gems Necklace.png",
    descripcion: "Collar gema rosada",
    cantidadColor: {
      "Rose Gold": 0,
      Silver: 0,
      Gold: 0,
    },
    cantidadTalla: {
      48: 0,
      50: 0,
      52: 0,
      54: 0,
      56: 0,
      58: 0,
      60: 0,
      62: 0,
      64: 0,
      66: 0,
      68: 0,
      70: 0,
    },
  },
  {
    id: 1,
    nombre: "Aurora Ring",
    codigo: "AN123",
    precioUnitario: 125.28,
    tipoAccesorio: "anillo",
    imagenes: "../images/Aurora Ring.png",
    descripcion: "Anillo diamantado olas",
    cantidadColor: {
      "Rose Gold": 31,
      Silver: 38,
    },
    cantidadTalla: {
      48: 3,
      50: 7,
      52: 0,
      54: 6,
      56: 2,
      58: 9,
      60: 10,
      62: 4,
      64: 15,
      66: 5,
      68: 2,
      70: 6,
    },
  },
  {
    id: 13,
    nombre: "Reflections Necklace",
    codigo: "N0124",
    precioUnitario: 620.73,
    tipoAccesorio: "Necklace",
    imagenes: "../images/Reflections Necklace.png",
    descripcion: "Collar serpiente rojo-negro-dorado",
    cantidadColor: {
      "Rose Gold": 0,
      Silver: 0,
      Gold: 0,
    },
  },
  {
    id: 2,
    nombre: "Dreamy Infinity Ring",
    codigo: "AN124",
    precioUnitario: 327.71,
    tipoAccesorio: "anillo",
    imagenes: "../images/Dreamy Infinity Ring.png",
    descripcion: "Anillo diamante rosa",
    cantidadColor: {
      "Rose Gold": 40,
      Silver: 18,
    },
    cantidadTalla: {
      48: 4,
      50: 7,
      52: 0,
      54: 0,
      56: 5,
      58: 10,
      60: 10,
      62: 4,
      64: 5,
      66: 5,
      68: 2,
      70: 6,
    },
  },
  {
    id: 3,
    nombre: "Opulent Jewels Ring",
    codigo: "AN125",
    precioUnitario: 168.76,
    tipoAccesorio: "anillo",
    imagenes: "../images/Opulent Jewels Ring.png",
    descripcion: "Anillo gato",
    cantidadColor: {
      "Rose Gold": 31,
      Silver: 38,
    },
    cantidadTalla: {
      48: 3,
      50: 7,
      52: 0,
      54: 6,
      56: 2,
      58: 9,
      60: 10,
      62: 4,
      64: 15,
      66: 5,
      68: 2,
      70: 6,
    },
  },
  {
    id: 29,
    nombre: "Serene Solitaire Earrings",
    codigo: "AR124",
    precioUnitario: 620.73,
    tipoAccesorio: "aretes",
    imagenes: "../images/Timeless Halo Earrings.png",
    descripcion: "Aretes crital cuadrado",
    cantidadColor: {
      Gold: 2,
      Silver: 18,
    },
    cantidadTalla: {
      48: 2,
      50: 0,
      52: 2,
      54: 2,
      56: 2,
      58: 2,
      60: 2,
      62: 0,
      64: 2,
      66: 2,
      68: 2,
      70: 2,
    },
  },
  
  {
    id: 20,
    nombre: "Exquisite Earrings",
    codigo: "AR125",
    precioUnitario: 620.73,
    tipoAccesorio: "aretes",
    imagenes: "../images/Exquisite Earrings.png",
    descripcion: "Aretes gota de agua tallados",
    cantidadColor: {
      Gold: 9,
      Silver: 11,
    },
    cantidadTalla: {
      48: 2,
      50: 0,
      52: 2,
      54: 2,
      56: 2,
      58: 2,
      60: 2,
      62: 0,
      64: 2,
      66: 2,
      68: 2,
      70: 2,
    },
  },
  {
    id: 4,
    nombre: "Timeless Elegance Ring",
    codigo: "AN126",
    precioUnitario: 125.28,
    tipoAccesorio: "anillo",
    imagenes: "../images/Timeless Elegance Ring.png",
    descripcion: "3 en 1 lila",
    cantidadColor: {
      "Rose Gold": 40,
      Silver: 18,
    },
    cantidadTalla: {
      48: 4,
      50: 7,
      52: 0,
      54: 0,
      56: 5,
      58: 10,
      60: 10,
      62: 4,
      64: 5,
      66: 5,
      68: 2,
      70: 6,
    },
  },
];

// const contenedorProductos = document.getElementById("productos-shop-page");
const listaProductos = document.getElementById("lista-productos");
console.log(listaProductos);//capturamos la lista de productos del html

 //con .innerHTML remplazamos el contenido del HTML (por eso se toma el string)
  //.map rrecorre la lista y el primer parametro que recibe es una NUEVA lista
const poblarLista = () => {
  listaProductos.innerHTML  = productosShopPage.map((producto) => {
   return/*Hacemos retornar un string y cada item que queremos que se pinte lo asignamos ()por eso producto. + el elemento que queremos tomar de la lista*/`
    <a class="link_catalogo" href="../pages/shop_2.html">
      <figure class="catalogo">
        <img class="fotos-catalogo" src="${producto.imagenes}" alt="Collar gema">
        <figcaption id="12" class="referencia-producto">${producto.nombre}</figcaption>
        <figcaption class="precio">$${producto.precioUnitario}</figcaption>
      </figure>
    </a>  `
  }).join(""); //Lo convertimos en un solo elemento y por ende quita las comas.
  return listaProductos;
}
poblarLista();



