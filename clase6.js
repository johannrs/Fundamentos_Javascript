var sacha = {
    nombre: 'Johann',
    apellido: 'Rios',
    edad: 33
  }
  
  var dario = {
    nombre: 'Darío',
    apellido: 'Susnisky',
    edad: 27
  }
  
  function imprimirNombreEnMayusculas({apellido}) {
    console.log(apellido.toUpperCase())
  }
  
  imprimirNombreEnMayusculas(sacha)
  imprimirNombreEnMayusculas(dario)
  // imprimirNombreEnMayusculas({ nombre: 'Pepito' })
//   imprimirNombreEnMayusculas({ apellido: 'Gomez' })
