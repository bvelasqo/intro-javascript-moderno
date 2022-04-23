const nombre = "Brandon";
const apellido = 'Velásquez';

//Los templates string ayudan a no tener que hacer este tipo de concatenaciones:
const nombreCompleto = nombre + ' '+ apellido;
console.log(nombreCompleto); // Brandon Velásquez

//template string:
const nombreCompletoTS = `${nombre} ${apellido}`
console.log(nombreCompletoTS) // Brandon Velásquez

function getSaludo(nombre){
  return `Hola ${nombre}`;
}

console.log(getSaludo(nombre)); // Hola Brandon