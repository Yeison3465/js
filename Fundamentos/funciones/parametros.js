/*function calculadora(numero, numero2){
    alert("suma " + (numero + numero2))
    alert("resta " + (numero - numero2))
    alert("multiplicacion " + (numero * numero2))
    alert("division " + (numero / numero2))

}

for(var i = 0; i <10; i++){
    calculadora(i, 18) 
}

// parametros opcionales
function calculadora2(numero, numero2, variable = false){
    if(variable == false){
        alert("suma " + (numero + numero2))
        alert("resta " + (numero - numero2))
        alert("multiplicacion " + (numero * numero2))
        alert("division " + (numero / numero2))
    }else{
        alert("suma " + (numero + numero2))
        alert("resta " + (numero - numero2))
        alert("multiplicacion " + (numero * numero2))
        alert("division " + (numero / numero2)) 
        console.log("XD")
    }

}

calculadora2(6,7,true)
calculadora2(6,7)*/

// parametros Rest y Spread

/*function ListaDeCarros(carro1,carro2,...carrosextras){
    console.log("Carro : " + carro1)
    console.log("Carro : " + carro2)
    console.log("Carro : " + carrosextras)
}

var nuevalista = ['Carro8', 'Carro9', 'Carro10', 'Carro11']

ListaDeCarros('Renaul','Nizzan','MarcaX',...nuevalista)*/

// funciones callback
/*function sumar(numero1,numero2,sumaymuestra,sumapor2){
    var suma = numero1 + numero2
    sumaymuestra(suma)
    sumapor2(suma)


}

sumar(3,6,function(dato){
    console.log(dato)
},
function(dato){
    console.log(dato*2)
})*/

// funciones flecha


function sumar(numero1,numero2,sumaymuestra,sumapor2){
    var suma = numero1 + numero2
    sumaymuestra(suma)
    sumapor2(suma)


}

sumar(3,6,dato => {
    console.log(dato)
},
dato => {
    console.log(dato*2)
})
