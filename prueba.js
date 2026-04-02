let productos = [
  {
    codigo: "05001",
    nombre: "Mouse",
    cantidadFisica: 0,
    reservada: 0
  }
];

const newCodigo = prompt("Ingrese el codigo del producto");

// buscar producto
let producto = productos.find(p => p.codigo === newCodigo);

if (!producto) {
  // crear producto
  producto = {
    codigo: newCodigo,
    nombre: "Nuevo producto",
    cantidadFisica: 0,
    reservada: 0
  };

  productos.push(producto);
  console.log("Producto creado");
}

// ===== INGRESAR =====
const cantidadFisica = Number(prompt("Ingrese cantidad a ingresar"));

if (cantidadFisica <= 0) {
  console.log("ERROR: cantidad inválida");
} else {
  producto.cantidadFisica += cantidadFisica;
  console.log("OK ingreso");
}
// RESERVAR//
const cantidadReservada = Number(prompt("Ingrese cantidad a reservar"));

let disponible = producto.cantidadFisica - producto.reservada;

if (cantidadReservada <= 0) {
  console.log("error: cantidad inválida");
} else if (cantidadReservada > disponible) {
  console.log("error: no hay cantidad disponible suficiente");
} else {
  producto.reservada += cantidadReservada;
  console.log("OK reserva");
}

const disponibleactual = producto.cantidadFisica - producto.reservada;

console.log(
  `${producto.codigo} fisica=${producto.cantidadFisica} reservada=${producto.reservada} disponible=${disponibleactual}`
);



// SACAR
const sacar = Number(prompt("Cantidad a sacar"));

disponible = producto.cantidadFisica - producto.reservada;

if (sacar <= 0) {
  console.log("error: cantidad inválida");
} else if (sacar > disponible) {
  console.log("error: no hay cantidad disponible suficiente");
} else {
  producto.cantidadFisica -= sacar;
  console.log("OK sacar");
}

// LIBERAR
const liberar = Number(prompt("Cantidad a liberar"));

if (liberar <= 0) {
  console.log("error: cantidad inválida");
} else if (liberar > producto.reservada) {
  console.log("error: no hay suficiente reservado");
} else {
  producto.reservada -= liberar;
  console.log("OK liberar");
}

// CONSULTAR

console.log(
  `${producto.codigo} fisica=${producto.cantidadFisica} reservada=${producto.reservada} disponible=${producto.cantidadFisica - producto.reservada}`
);



