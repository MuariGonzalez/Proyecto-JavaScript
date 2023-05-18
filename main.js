//Calcular el precio del producto en cuotas

//Creamos clases:

class Clientes {
    constructor(nombre, apellido,){
        this.nombre = nombre;
        this.apellido = apellido;
    }

};

//Variables:
const arrayClientes = [ ]
let cantidadDeCuotas = 0;
let costoTotalCarrito = 0;
let costoTotalCarritoLleno = 0;
let agregarProducto = true;
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit",(e)=> {
   //Evitamos el comportamiento por default del formulario
    e.preventDefault();
    //Tomamos los datos del formulario
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    //Nuevo objeto
    const cliente = new Clientes(nombre.value, apellido.value)
    //pusheamos
    arrayClientes.push(cliente)
    //reseteamos formulario
    formulario.reset()
    console.log(arrayClientes)
})
let cuotas = cantidadDeCuotas
let precioFinal = costoTotalCarritoLleno

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

const mauricio = arrayClientes.some(item => item.nombre === "Mauricio")
console.log(mauricio)
