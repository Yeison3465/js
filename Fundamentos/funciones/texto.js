// tranformacion de textos 

var numero = 444
var texto = "Hola mundo soy una nueva  variable "
var texto2 = "Soy la mejor variable"

var dato = numero.toString() // esto se usa para convertir un a String
dato = texto.toLowerCase() // para convertir un todo en minusculas
dato = texto2.toUpperCase() // para convertir un todo en mayusculas 

// calcular longitud 

var marca_pc = "Lenovo"
console.log(marca_pc.length)

// concatenar -  unir textos

var textototal = texto.concat(" "+texto2)
console.log(textototal)


var busqueda = texto.indexOf("mundo") // esta es un forma de saber la posicion donde empieza una palabra
console.log(busqueda)

busqueda = texto.indexOf("mundo") // esta es un forma de saber la posicion donde si hay otra palabra en una posicion mas adenlate 
console.log(busqueda)

busqueda = texto.search("mundo") // esta es un forma de hacer busqueda
console.log(busqueda)

busqueda = texto.match("mundo") // esta es un forma de hacer busqueda , y a para hacer una  busqueda global se coloca /mundo/g
console.log(busqueda)

busqueda = texto.substring(2,10) // esta es un forma de hacer busqueda especifica desde un caracter 
console.log(busqueda)

busqueda = texto.charAt(4) // esta es un forma de hacer busqueda especifica de un caracter  
console.log(busqueda)

busqueda = texto.endsWith("mundo") // esta es un forma de hacer busqueda especifica para encotrar una palabra al finalizar un string  
console.log(busqueda)

busqueda = texto.startsWith("mundo") // esta es un forma de hacer busqueda especifica para encotrar una palabra al comenzar un string  
console.log(busqueda)

busqueda = texto.includes("mundo") // esta es un forma de hacer busqueda especifica para encotrar una palabra al finalizar un string  
console.log(busqueda)


var texto3 = "El computador es una maquina"

var busqueda = texto3.replace("Computador", "PC") // la primera es la palabra que se va a remplazar
console.log(busqueda)

var busqueda = texto3.slice(4) // aparecera una el desde la poscion n indicada 
console.log(busqueda)

var busqueda = texto3.split(",") // esta es la forma que un string se meta en una array y dems la forma de como separarlos
console.log(busqueda)

var busqueda = texto3.trim() // esto hace que los string  que tengan espacio se quiten
console.log(busqueda)