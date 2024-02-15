// Importar productosShopPage desde el módulo products.js
import { productosShopPage } from "../modules/products.js";


const URL_BASE = "https://darlingg.free.beeceptor.com";
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

const containerProducts = document.getElementById("order-summary");

const form = document.getElementById("formularioCompra");

const insertarProductos = (contenedor, listaProductos) => {
  contenedor.innerHTML = "";
  listaProductos.forEach((producto) => {
    contenedor.innerHTML += `
        <div class="foto-order"  name=${producto.id}>
                <img class="estilos-fotos" src=${producto.imagen} alt=${producto.nombre}>
                <div class="contenedor-ref">
                    <p class="referencia">${producto.nombre}</p>
                    <p class="codigo">Code: ${producto.codigo}</p>
                </div>
                <p class="precio">$${producto.precioUnitario}</p>
            
                <div id="contenedorTarjeta">
                    <button class="boton-borrar"><img src="../images/create.png" alt="borrar"></button>
                </div>
            </div>
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

  if (dataForm.nombreCompleto.length <= 3) {
    alert("El nombre debe contener más de 3 caracteres");
    emptyFields.push("nombre");
  }

  if (!emailRegex.test(dataForm.correo)) {
    alert("El email ingresado no es valido");
    emptyFields.push("email");
  }

  return emptyFields.length > 0 ? emptyFields : false;
};

document.addEventListener("DOMContentLoaded", async () => {
  const url = `${URL_BASE}/productos`;
  const productos = await getProducts(url);
  insertarProductos(containerProducts, productos.productos);
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const cliente = obtenerDatosDelForm(form);
  
  const validation = validateDataForm(cliente);

  if (validation) {
    alert(
      "El formulario tiene los siguientes datos vacíos " + validation.toString()
    );
  } else {
    localStorage.setItem("informacionCliente", JSON.stringify(cliente));
    form.reset();
    location.href = "../pages/thank_you_page.html";
  }
});
