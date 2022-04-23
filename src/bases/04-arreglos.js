//Arreglos en JS

// forma de hacer arreglos de tamaño fijo expandible
const arreglo = new Array(100);
arreglo.push(1)

//arreglo como comunmente se declara
const arreglo2 = [1,2,3,4]
// arreglo2.push(1)
// arreglo2.push(2)
// arreglo2.push(3)
// arreglo2.push(4)
//No es recomendable usar push, porque modifica el objeto(arreglo) principal, utilizaremos el spread mas adelante

//Acá pasara el mismo problema de asignacion de referencia en memoria
let arreglo3 = arreglo2
arreglo2.push(5);

//Para solucionarlo lo haremos de la misma forma que la clase pasada
let arreglo4 = [...arreglo3 , 6]

const arreglo5 = arreglo4.map((num) => {
  return num**2
})


console.log('arreglo ', arreglo)
console.log('arreglo2 ', arreglo2)
console.log('arreglo3 ', arreglo3)
console.log('arreglo4 ', arreglo4)
console.log('arreglo5 ', arreglo5)