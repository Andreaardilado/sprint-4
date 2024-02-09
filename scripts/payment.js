// DOM
const totalElement = document.querySelector('.precio-total-final');
const applyDiscountButton = document.querySelector('.boton-aplicar-bono');
const discountInput = document.querySelector('[name="bono-descuento"]');
const proceedToPaymentButton = document.querySelector('.proceder-pago');
const orderSummary = document.querySelector('.order-summary');

// Lista de productos agrgados
const productosSeleccionados = [
];

// Variable total
let total = calcularTotal();

// Actualiza  total al cargar 
totalCompra();

// Terminar pago
proceedToPaymentButton.addEventListener('click', () => {
    proceedToPayment();
});

// Calcula el total
function calcularTotal() {
    return productosSeleccionados.reduce((accum, producto) => accum + producto.precioUnitario, 0);
}

// Actualizza el total
function totalCompra() {
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Proceder a pagar 
function proceedToPayment() {
    alert('¡Gracias por tu compra! Redirigiendo al proceso de pago...');
    // Aquí puedes agregar lógica adicional para el proceso de pago, como redirigir a una página de pago real.
}

// elimionar Prodcutos
orderSummary.addEventListener('click', (event) => {
    const deleteButton = event.target.closest('.boton-borrar');
    
    if (deleteButton) {
        const orderItem = deleteButton.closest('.foto-order');
        orderItem.remove();
        total = calcularTotal(); // Actualiza el nuevo total
        totalCompra(); // Actualiza total
    }
});