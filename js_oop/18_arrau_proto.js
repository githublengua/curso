const aDatos = ['luis','juan','rosa','maria']
comsole.log(aAatos.__proto__)
console.log(Array.prototipe)   //push 

Array.prototype.saludar = function (nombre) {
    console.log(`hola ${nombre}, soy un array `)
    
}

Array.prototype.push = function (nombre) {
    console.log('hola, '+ nombre)
}
aDatos.push('ernesto') 

aDatos.saludar('pepe')
console.log(aDatos)

const aOtros[]
aOtros.push('gato')

console.log(aOtros)

aOtros.saludar('perro')

//aDatos.saludar()                     