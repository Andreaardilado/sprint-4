const cliente = JSON.parse(localStorage.getItem("informacionCliente"));

const contenedor = document.getElementById("informacion-compra");
const date = new Date().toDateString();
const numeroOrden = Math.floor((Math. random() * 1000000) + 1);
const productosSeleccionados = JSON.parse(localStorage.getItem("productosSeleccionados"));

const calcularPrecioFinal = () => {
    const valoresPorProducto = productosSeleccionados.map((producto) => producto.precioUnitario * producto.cantidad);
    return valoresPorProducto.reduce((suma, valor) => suma + valor, 0);
}

const precioFinal = calcularPrecioFinal().toFixed(2);
const contenendorProductos = document.getElementById("orden-compra");

const mostrarOrden = () => {
    contenendorProductos.innerHTML = "";
    productosSeleccionados.map((producto) => {
        contenendorProductos.innerHTML = `
        <div class="foto-order2" name=${producto.id}>
            <img class="estilos-fotos" src="${producto.imagen}" alt="${producto.nombre}y">
            <div class="contenedor-ref">
                <p class="referencia">${producto.nombre}</p>
                <p class="codigo">Code: ${producto.codigo}</p>
                <p class="cantidad">x${producto.cantidad}</p>
            </div>
            <p class="precio">$${producto.precioUnitario}</p>
        </div>
        `;
    })
}
const obtenerDatosCompra = () => {
    contenedor.innerHTML = `
    <div class="foto-order">
    <img class="estilos-vectores" src="../images/Calendar date 1.png" alt="calendario">
    <p class="titulos-vectores"> Date</p>
    <p class="fecha">${date}</p>
    </div>

    <div class="foto-order">
    <img class="estilos-vectores" src="../images/Profile 8.png" alt="cliente">
    <p class="titulos-vectores">Custumer</p>
    <p class="nombre-cliente">${cliente.nombreCompleto}</p>
    </div>

    <div class="foto-order">
    <img class="estilos-vectores" src="../images/Money 13 1.png" alt="metodo-pago">
    <p class="titulos-vectores"> Payment Method</p>
    <img class="visa" src="../images/Image visa.jpg" alt="metodo-pago">
    </div>

    <img class="línea-horizontal" src="../images/Line 3.png">

    <div class="foto-order">
    <img class="estilos-vectores" src="../images/Receipt list 43 1.png" alt="orden de pago">
    <p class="titulos-vectores"> Order Number</p>
    <p class="numero-factura">${numeroOrden}</p>
    </div>

    <div class="foto-order">
    <img class="estilos-vectores" src="../images/Currency dollar 1.png" alt="signo dolar">
    <p class="titulos-vectores"> Total</p>
    <p class="total-factura"> $${precioFinal}</p>
    </div>
`;
mostrarOrden();
}
obtenerDatosCompra();

