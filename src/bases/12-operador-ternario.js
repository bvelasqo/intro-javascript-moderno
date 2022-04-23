const activo = true;
let mensaje = '';
if (activo) {
  mensaje = 'Activo';
} else {
  mensaje = 'Inactivo';
}
//Lo anterior se resume en lo siguiente con el operador ternario
mensaje = activo ? 'Activo' : 'Inactivo';

//el operador && significa que lo de la derecha se muestra o asigna si la condicion de la izquierda se cumple
const mensaje2 = activo && 'Activo';
