'use strict';

var marca_de_computador = "Lenovo"; // este tipo de variable se puede remplazar por otro valor y es una variable que usa de manera global
console.log(marca_de_computador)
marca_de_computador = "HP";
console.log(marca_de_computador)

const ip = "127.0.0.1"; // este tipo de variable no se puede remplazar por otro valor
console.log(ip);
//ip = "127.0.0.3";

var numero1 = 1;
var numero2 = 2;
if (numero2 > numero1){
    let respuesta = true; // esta variable solo se usa de manera local
    console.log(respuesta)
}

//respuesta=false; // esta variable sale indefinida porque es para un bloque de codigo

for (let i = 1; i <= 10; i++) {
    const resultado = i * 5;
    
    // Omitir la impresión del resultado cuando i sea igual a 5
    if (i !== 5) {
      console.log(`5 x ${i} = ${resultado}`);
    }
  }