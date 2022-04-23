//las llaves representan un objeto {}
const persona = {
	nombre: 'Tony',
	apellido: 'Stark',
	edad: 32,
	direccion: {
		ciudad: 'Popayán',
		zip: 5645151,
		lat: 14.2356,
		lng: 34.923335,
	}
}

console.log(`${persona.nombre} ${persona.apellido}: ${persona.edad} años`)
//console.table(persona)


//clonando persona
const persona2= persona;
persona2.nombre = "Peter"

console.log(persona)
console.log(persona2)
/*
	al hacer esto se cambiaran los valores de ambos objetos (persona y persona2)
	esto pasa porque no estás clonando el objeto persona sino asignando una copia
	de la referencia en memoria del objeto persona, es decir persona2 es igual a la
	referencia persona por lo tanto actuan igual. para evitar eso hacemos lo siguiente
*/

const persona3 = {...persona}
persona3.nombre = "Clark"
console.log(persona)
console.log(persona2)
console.log(persona3)