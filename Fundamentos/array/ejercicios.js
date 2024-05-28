var numeros = []
do{
    var numero1 = (Number(prompt("1. Ingrese un numero: ")))
    var numero2 = (Number(prompt("2. Ingrese un numero: ")))
    var numero3 = (Number(prompt("3. Ingrese un numero: ")))
    var numero4 = (Number(prompt("4. Ingrese un numero: ")))
    var numero5 = (Number(prompt("5. Ingrese un numero: ")))
    var numero6 = (Number(prompt("6. Ingrese un numero: ")))

}while(isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4) || isNaN(numero5) || isNaN(numero6))

numeros.push(numero1)
numeros.push(numero2)
numeros.push(numero3)
numeros.push(numero4)
numeros.push(numero5)
numeros.push(numero6)


for(let num in numeros){
    var resultado = numeros[num]
    alert(resultado)
}

numeros.reverse()
alert(numeros)
numeros.sort()
alert(numeros)

alert(numeros.length)





