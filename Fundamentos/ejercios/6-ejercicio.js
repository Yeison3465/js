// saber si un numeroe es par o impar 

var numero =(parseInt(prompt("Ingrese un numero: ")))

while(isNaN(numero) || numero < 0) {
    alert("error")
    numero =(parseInt(prompt("Ingrese un numero: ")))
}

if(numero % 2 == 0){
    alert("es par")
}else{
    alert("impar")
}