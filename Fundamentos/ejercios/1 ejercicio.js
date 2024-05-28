// hacer un ejercio que pida 2 numeros y que diga cual es mayor y cuales e es menor o si son iguales 
// si los numero son menores que 0 o son string que los vuelva a pedir 
var dato_1 = (Number(prompt("Ingrese el numero: ")))
var dato_2 = (Number(prompt("Ingrese el numero: ")))

while((dato_1 <= 0 || dato_2 <= 0)||(isNaN(dato_1) || isFinite(dato_2))){
    alert("ingrese un numero valido")
    dato_1 = (Number(prompt("Ingrese el numero: ")))
    dato_2 = (Number(prompt("Ingrese el numero: ")))
} 

if(dato_1 > dato_2) {
    alert("el mayor es " + dato_1 + " el menor es " + dato_2)
}
else if(dato_1 < dato_2) {
    alert("el mayor es" + dato_2 + " el menor es " + dato_1)
}
else if (dato_1 ==  dato_2) {
    alert("los 2 son iguales ")
}

