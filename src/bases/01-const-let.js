const nombre = 'Brandon';
const apellido = 'Velásquez';
let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado); // Brandon Velásquez 4

if ( true ){
	//estas variables scope, solo van a existir dentro de este ámbito o scope
	let valorDado = 6
	const nombre = "Peter";
  console.log(valorDado, nombre); // 6 Peter
}