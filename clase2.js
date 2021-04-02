var nombre = 'Johann', apellido = 'Rios'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 4)

let ultimaLetra = "Alberto"
console.log('La ultima letra del nombre es ' + `${ultimaLetra.slice(-1)}`)