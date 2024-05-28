// mostrar los numero impares que hay entre 2 numeros introducido por el usuario 
var numerouno = (Number(prompt("Ingrese un numero: ")))
var numerodos = (Number(prompt("Ingrese un numero: ")))



while(isNaN(numerouno) || isNaN(numerodos)){
    alert("Ingrese numero validos")
    var numerouno = (Number(prompt("Ingrese un numero: ")))
    var numerodos = (Number(prompt("Ingrese un numero: ")))
}

while(numerouno < numerodos){
    if(numerouno%2!=0 ){
        calert(numerouno)
    }
    numerouno++
}