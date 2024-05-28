// hacer un programa que pida numero  los sume y saque el promedio mostrado el resultado cuando sea un numero negativo  
var contador = 0
var suma = 0

do{
    var numero = (Number(prompt("ingrese un numero")))
    if(isNaN(numero)){
        alert("no ingreso un numero valido")
        
    }
    else if (numero>=0){
        suma = suma + numero
        contador = contador + 1


    }
}while(numero>=0)

alert(" la suma de los numeros es " + suma + " el promedio de los numeros ingresados es "+ (suma/contador))