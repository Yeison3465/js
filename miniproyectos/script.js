window.addEventListener('load',()=>{
    var formulario = document.querySelector('form');
    var resultadoElement = document.getElementById('resultado');

    formulario.addEventListener('submit',function(){
        var numero1 = (Number(document.querySelector('#numero1').value))
        var numero2 = (Number(document.querySelector('#numero2').value))
        console.log(numero1,numero2)
        var suma = numero1 + numero2
        resultadoElement.textContent = 'el resultado es ' + suma

    })
})