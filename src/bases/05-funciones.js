function saludar(nombre) {
  return `Hola ${nombre}`;
}
saludar = 30;

console.log('saludar ', saludar); //referencia a la funcion
// console.log(saludar('Granuja'))

/*Por el hecho de que se puede cambiar la referencia a la funcion no es recomendado usar las funciones así como la hicimos anteriormente, en cambio de eso haremos lo siguiente */

const saludar2 = function (nombre) {
  return `Hola ${nombre}`;
};

console.log('saludar2 ', saludar2('Métricas'));

//funcion de flecha
/*  */
const saludarFlecha = (nombre) => {
  return `Hola ${nombre}`;
};

console.log('saludarFlecha ', saludarFlecha('Mañas'));

const saludarFlecha2 = (nombre) => `Hola ${nombre}`;

console.log('saludarFlecha2 ', saludarFlecha2('N hardem'));

const saludarFlecha3 = () => `Hola rappers`;

console.log('saludarFlecha3 ', saludarFlecha3());

//Retornando objetos implicitos
const getUser = () => ({
  uid: 'AVC456',
  username: 'El_aragang_2022',
});

console.log('getUser ', getUser());

const getUserActive = (nombre) => ({
  uid: 'ABC123',
  username: nombre,
});

const usuarioActivo = getUserActive('Brandon');
console.log('usuarioActivo', usuarioActivo)
