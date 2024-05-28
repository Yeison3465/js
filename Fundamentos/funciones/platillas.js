var nombre = prompt("Mi nombre es : ")
var apellido = prompt("Mi apellido es : ")

var platilla = `
<h1>EL texto es </h1>
<p>Mi nombre es: ${nombre}</p>
<p>Mi apellido es: ${apellido}</p>
`
document.write(platilla)