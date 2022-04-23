const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

//para no hacer lo anterior, hacemos lo siguiente
const [p1] = personajes;
const [, p2] = personajes;
const [, , p3] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

//en funcion
const retornaArreglo = () => {
  return['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros)

//Simulacion de useState
const State = (valor) => [valor, () => console.log("Hello everybody")]
const [nombre, setNombre] = State('Goku')
setNombre()
console.log(nombre)
