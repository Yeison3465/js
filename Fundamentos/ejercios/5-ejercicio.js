// Muestre todos los divisores de un numero introducido por un prom 

var numero =(parseInt(prompt("Ingrese un numero: ")))
var i = 0;
while(i < numero){
    i++
    if(numero%i==0){
        alert(i)

    }
}