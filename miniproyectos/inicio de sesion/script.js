window.addEventListener('load',()=>{
    var formulario1 = document.querySelector('.form1')
    var formulario2 = document.querySelector('.form2')
    var respuesta = document.querySelector('#resul')
    var respuesta1 = document.querySelector('#resul1')
    var usuarios =[]

    formulario1.addEventListener('submit',()=>{
        var nombre = (document.querySelector('#nombre').value)
        var edad = (document.querySelector('#edad').value)
        usuarios.push([nombre,edad])
        respuesta1.textContent = "usuario registrados"

        for(const x of usuarios){
            alert(x)
        }

    })

    formulario2.addEventListener('submit',()=>{
        var nombre1 = (document.querySelector('#nombre1').value)
        var edad1 = (document.querySelector('#edad1').value)
        var encontrado = false;
        for(let x of usuarios){
            alert(x)
        }
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i][0] === nombre1 && usuarios[i][1] === edad1) {
                encontrado = true;
                break;
            }
        }

        if (encontrado) {
            respuesta.textContent = "Usuario encontrado";
        } else {
            respuesta.textContent = "Usuario no encontrado";
        }

            
    })


})