// Importar productosShopPage desde el módulo products.js
import { productosShopPage } from "../modules/products.js";


const URL_BASE = "";
//hacemos una petición get
const getProducts = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const containerProducts = document.getElementById("container-products");

const form = document.getElementById("formularioCompra");

const insertarProductos = (contenedor, listaProductos) => {
  contenedor.innerHTML = "";
  listaProductos.forEach((producto) => {
    contenedor.innerHTML += `
        <article class="cardProducto" name=${producto.id}>
            <figure>
                <img src=${producto.imagenes[0]} alt=${producto.nombre}>
            </figure>
            <span>$ ${producto.precioUnitario.toLocaleString()}</span>
            <h3>${producto.nombre}</h3>
        </article>
        `;
  });
};

const obtenerDatosDelForm = (form) => {
  const formData = new FormData(form);
  const dataForm = {};
  for (const [key, value] of formData.entries()) {
    dataForm[key] = value;
  }
  return dataForm;
};

const validateDataForm = (dataForm) => {
  let emptyFields = [];
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  for (const key in dataForm) {
    if (dataForm[key].trim() == "") {
      emptyFields.push(key);
    }
  }

  if (!dataForm.talla) {
    emptyFields.push("talla");
  }

  if (dataForm.nombre.length <= 3) {
    alert("El nombre debe contener más de 3 caracteres");
    emptyFields.push("nombre");
  }

  if (!emailRegex.test(dataForm.email)) {
    alert("El email ingresado no es valido");
    emptyFields.push("email");
  }

  return emptyFields.length > 0 ? emptyFields : false;
};

document.addEventListener("DOMContentLoaded", async () => {
  const url = `${URL_BASE}productos`;
  const productos = await getProducts(url);
  insertarProductos(containerProducts, productos);
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const newProduct = obtenerDatosDelForm(form);
  const validation = validateDataForm(newProduct);

  if (validation) {
    alert(
      "El formulario tiene los siguientes datos vacíos " + validation.toString()
    );
  } else {
    agregarProducto(newProduct, productos); // Asegúrate de que 'productos' esté definido.
    insertarProductos(containerProducts, productos);
    form.reset();
  }
});

const compraCompletada = () => {
  
  alert("Compra completada exitosamente");
};