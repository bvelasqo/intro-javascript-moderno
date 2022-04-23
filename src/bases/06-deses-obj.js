const persona = {
  nombre: 'Papo MC',
  edad: 35,
  clave: 'freestyler'
}

//asignacion desestructurante
/*solo extrae las variables puestas en las llaves del objeto y se las
asigna a las variables llamadas despues de los dos puntos(opcional)*/
const {nombre: name, clave: key} = persona;
const {edad} = persona
console.log(`${name} de ${edad} años es ${key}`) //Papo MC de 35 años es freestyler

const returnPersona = (user) => {
  //si no existe la variable puesta en las llave en el objeto(user en este caso) es por defecto undefined
  const {nombre, clave, profesion} = user;
  console.log("user", {nombre, clave, profesion}) //'user' { nombre: 'Papo MC', clave: 'freestyler' }
}
returnPersona(persona)

const Context = ({clave, nombre, edad}) => {
  return {
  	profesion: clave,
		anios: edad,
    latlng: {
      lat: 14.123,
      lng: -12.54
    }
  }
}

const {profesion, latlng: {lat, lng}} = Context(persona)

console.log('profesion: ', profesion)
console.log('lat: ', lat)
console.log('lat: ', lng)


