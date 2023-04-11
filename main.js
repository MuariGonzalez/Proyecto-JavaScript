//Calcular el precio del producto en cuotas

//Variables:


let cantidadDeCuotas = 0;
let costoTotalCarrito = 0;
let costoTotalCarritoLleno = 0;
let agregarProducto = true;


// Calculamos las coutas

function calcular() {
    let precioProducto = parseFloat(prompt("Ingrese el precio del producto"));cantidadDeCuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 1, 3 ,6 ,9 ,12"));
    
    while (cantidadDeCuotas !== 1 && cantidadDeCuotas !== 3 && cantidadDeCuotas !== 6 && cantidadDeCuotas !== 9 && cantidadDeCuotas !== 12) {
        alert("Colocar la cantidad de cuotas especificadas");
        cantidadDeCuotas = parseInt(prompt("Ingrese la cantidad de cuotas (1, 3 ,6 ,9 ,12)"));
    }

    if (cantidadDeCuotas === 1) {
        costoTotalCarrito = precioProducto;
    } else if (cantidadDeCuotas === 3) {
        costoTotalCarrito = precioProducto * 1.2;
    } else if (cantidadDeCuotas === 6) {
        costoTotalCarrito = precioProducto * 1.35;
    } else if (cantidadDeCuotas === 9) {
        costoTotalCarrito = precioProducto * 1.5;
    } else if (cantidadDeCuotas === 12) {
        costoTotalCarrito = precioProducto * 1.7;
    }


    alert("El costo total del Carrito en " + cantidadDeCuotas + " cuotas es de: $ " + costoTotalCarrito)
}

while (agregarProducto){
    calcular();
    costoTotalCarritoLleno = costoTotalCarritoLleno + costoTotalCarrito;
    agregarProducto = confirm ("¿Agregamos otro producto?")
}

alert ("El costo total del Carrito es de $: " + costoTotalCarritoLleno)

