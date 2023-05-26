//Creamos clases:
class Clientes {
    constructor(nombre, apellido, precio, cantidadDeCuotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.precio = precio;
        this.cantidadDeCuotas = cantidadDeCuotas;
    }
}

//Variables:
const arrayClientes = [];
let costoCarrito = 0;
const resultadoDiv = document.getElementById("resultado");
const boton = document.getElementById("boton");

// Obtener datos del Local Storage al cargar la página
window.addEventListener("load", () => {
    const nombreGuardado = localStorage.getItem("nombre");
    const apellidoGuardado = localStorage.getItem("apellido");
    
    if (nombreGuardado && apellidoGuardado) {
        document.getElementById("nombre").value = nombreGuardado;
        document.getElementById("apellido").value = apellidoGuardado;
    }
});

//Formulario
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    //Evitamos el comportamiento por defecto del formulario
    e.preventDefault();
    
    //Tomamos los datos del formulario
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const precioProducto = parseInt(document.getElementById("precioProducto").value);
    const seleccionarCuotas = parseInt(document.getElementById("seleccionarCuotas").value);
    
    //Nuevo objeto
    const cliente = new Clientes(nombre.value, apellido.value, precioProducto, seleccionarCuotas);
    
    //pusheamos
    arrayClientes.push(cliente);
    
    // Almacenar datos en el Local Storage
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("apellido", apellido.value);
    
    //reseteamos formulario
    formulario.reset();
    
    console.log(arrayClientes);
});

// Calculamos las cuotas
boton.onclick = function() {
    if (arrayClientes.length > 0) {
        const cliente = arrayClientes[arrayClientes.length - 1];
        
        if (cliente.cantidadDeCuotas === 1) {
            costoCarrito = cliente.precio;
        } else if (cliente.cantidadDeCuotas === 3) {
            costoCarrito = cliente.precio * 1.2;
        } else if (cliente.cantidadDeCuotas === 6) {
            costoCarrito = cliente.precio * 1.35;
        } else if (cliente.cantidadDeCuotas === 9) {
            costoCarrito = cliente.precio * 1.5;
        } else if (cliente.cantidadDeCuotas === 12) {
            costoCarrito = cliente.precio * 1.7;
        }
        
        resultadoDiv.innerHTML = `<div class="resultado">El costo de su producto es de $ ${costoCarrito}</div>`;
        
        crearDiv();
    }
};

function crearDiv() {
    // Crear el elemento div
    let nuevoDiv = document.createElement("div");
    
    // Asignar una clase al nuevo div
    nuevoDiv.classList.add("nuevo-div");

    // Agregar contenido al nuevo div
    nuevoDiv.innerHTML = `<div> <p>La cantidad de cuotas de su producto es de $</p> <p>${costoCarrito}</p> </div>`;

    // Obtener el elemento contenedor donde se mostrará el nuevo div
    let contenedor = document.getElementById("contenedor");

    // Agregar el nuevo div al contenedor
    contenedor.appendChild(nuevoDiv);
}

const mauricio = arrayClientes.some(item => item.nombre === "Mauricio");
console.log(mauricio);

