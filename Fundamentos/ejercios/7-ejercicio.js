// hacer una tabla de multiplicar introducido por pantalla 

var numero=(parseInt(prompt("Ingrese un numero: ")))
var n = (parseInt(prompt("Ingrese las veces que quiere repetir: ")))
for(var i=1; i<n; i++){
    var  resultado = numero * i
    alert(numero + " * " + i + " =  " + resultado)
}