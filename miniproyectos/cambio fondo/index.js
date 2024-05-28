window.addEventListener('load',()=>{
    var boton = document.querySelector('#cambio')
    var body = document.querySelector('#body')
    var h1 = document.querySelector('#color')
    var p = document.getElementById('numero')
    boton.addEventListener('click',()=>{
        var bg = body.style.background
        var numero = Math.floor(Math.random() * 256);
        var numero1 = Math.floor(Math.random() * 256);
        var numero2 = Math.floor(Math.random() * 256);
        console.log(numero)
        body.style.background = `rgb(${numero}, ${numero1}, ${numero2})`
        h1.style.color = "red"

        
    })
})