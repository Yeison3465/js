// hacer un programa que pida 2 numero y mostrar los numeros que hay entre ellos

var numerouno = (Number(prompt("Ingrese un numero: ")))
var numerodos = (Number(prompt("Ingrese un numero: ")))



while(isNaN(numerouno) || isNaN(numerodos)){
    alert("Ingrese numero validos")
    var numerouno = (Number(prompt("Ingrese un numero: ")))
    var numerodos = (Number(prompt("Ingrese un numero: ")))
}

while(numerouno < numerodos){
    alert(numerouno)
    numerouno++
}



