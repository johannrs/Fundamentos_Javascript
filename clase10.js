var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 8,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
  }

  function mayorDeEdad(person){
    if(person.edad>=18){
        console.log(`${person.nombre} es mayor de edad`)
    }else{
        console.log(`${person.nombre} no es mayor de edad`)
    }
  }

  mayorDeEdad(sacha)
      
  
  
//   function imprimirProfesiones(persona) {
//     console.log(`${persona.nombre} es:`)
  
//     if (persona.ingeniero) {
//       console.log('Ingeniero')
//     } else {
//       console.log('No es ingeniero')
//     }
  
//     if (persona.cocinero) {
//       console.log('Cocinero')
//     }
  
//     if (persona.dj) {
//       console.log('DJ')
//     }
  
//     if (persona.cantante) {
//       console.log('Cantante')
//     }
  
//     if (persona.guitarrista) {
//       console.log('Gutiarrista')
//     }
  
//     if (persona.drone) {
//       console.log('Piloto de drone')
//     }
  
//   }
  
//   imprimirProfesiones(sacha)