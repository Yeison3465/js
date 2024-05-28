var carros = ["BMW","NIZZAN","AUDI"];
var motos = ["Moto 1" , "Moto 2" , "Moto 3" ]
var car = new Array("KIA","RENAUL","FERRARY")
console.log(carros[2])

var elemento = (Number(prompt("Ingrese un numero: ")))
if(elemento >= carros.length){
    alert("Ingresar un numero de este rango : "+ carros.length)
}else{
    alert("El carro que escogio es : " + (carros[elemento]))
}

for(var i = 0; i < carros.length; i++) {
    console.log(carros[i])
}

carros.forEach((elemento , indice) =>{
    console.log(elemento, indice)

})

var vehiculo = [carros,motos]

console.log([0][2])
console.log([1][2])


var carro = "";
var carros2 = [];
do{
    carro = (prompt("Introduce un marca de carro: "))
    carros2.push(carro)


}while(carro != "ACABAR")

carros2.splice()

var computador = "Lenovo, HP, ACER"
var arraycomputador = computador.split(", ")

carros.sort() // esta función sirve para ordenar en orden alfabetico
carros.reverse()// sirve para invertir la lista

// para recorre una array 

for(let carro3 in carros){
    console.log(carros[carro3])
}


// busquedas 

var numeros = [40,50,60]
var busquedas = numeros.some(numeros => numeros <= 1)

var letras = ["a", "b", "c", "d", "e", "f"]

var busqueda = letras.findIndex(letras => letras == "a")