/*
Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número 
aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un 
número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, 
si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

let btn = document.getElementById(`subir`).addEventListener(`click`, nroAleatorio);
let btnLimpiar = document.getElementById(`limpiar`).addEventListener(`click`,limpiarCampo);

function nroAleatorio(){
    let input = document.getElementById(`inputText`);
    let ram = ramdon(1,10)
    let aux = ram
    console.log(aux)
    if(input.value >= 11 || input.value <= 0){
        alert(`ingresar numeros en el rango establecido`)
    }else{
    if (input.value == ram) {
      alert(`este es el correcto adivinaste!`);
    } else if (input.value > ram) {
      alert(`este numero es mayor al puesto, intentalo de nuevo`);
    } else {
      alert(`este numero es menor al puesto, intentalo de nuevo`);
    }
    }
}

function limpiarCampo(){
    document.getElementById(`inputText`).value = " ";
}

function ramdon(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}