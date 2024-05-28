var boton = document.querySelector('#boton');

function cambiarcolor(){
    var bg = boton.style.background;

    if(bg == "blue"){
        boton.style.background = "green";
    }else{
        boton.style.background = "blue";
    }

    return true;
}

// tambien se puede usar THIS para remplazar la variable que usando en el evento 
// eventos con el click
boton.addEventListener('click',function(){
    cambiarcolor();
})

// eventos con el over
boton.addEventListener('mouseover',function(){
    boton.style.background = "white";

})

// eventos con el out

boton.addEventListener('mouseout',function(){
    boton.style.background = "orange";
})

// focus 
var input = document.querySelector('#inp');

input.addEventListener('focus',function(){
    console.log(input, "[focus]Estas dentro del input")
})

// blur
input.addEventListener('blur',function(){
    console.log(input , "[blur]Estas fuera del input")
})

//keydown
input.addEventListener('keydown',function(eventos){
    console.log("[keydown]Pulsando esta tecla " , String.fromCharCode(eventos.keyCode))
})

// keypress
input.addEventListener('keypress',function(eventos){
    console.log("[keypress]Pulsando esta tecla esta precionada " , String.fromCharCode(eventos.keyCode))
})

// keyupp
input.addEventListener('keyup',function(eventos){
    console.log("[keyup]Pulsando esta tecla se solto " , String.fromCharCode(eventos.keyCode))
})

window.addEventListener('load',()=>{
    // esto sirve para poner toda las funciones y poner el script en el heat
})

