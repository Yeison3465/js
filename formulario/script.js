

window.addEventListener('load', () => {
    var formulario = document.querySelector('form');
    
    
    formulario.addEventListener('submit', function() {
        var nombre = document.querySelector('#nombre').value;
        var apellido = document.querySelector('#apellido').value;
        var edad = document.querySelector('#edad').value;
        console.log('Esto sirve ');
        console.log(nombre, apellido, edad);
        var parrafo = document.createElement("p")
        parrafo.append(nombre)
        parrafo.append(apellido)
        parrafo.append(edad)
    });
});