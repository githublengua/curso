
    const aDatos = ['perro', 'gato']
    aDatos.length

    // Implementadas como inmutables
    console.log(aDatos.concat(['leon', 'tigre']))
    console.log(aDatos)

    // Implementadas com mutables
    aDatos.sort()
    console.log(aDatos)

    const aNumbers = [32, 3, 2, 21, 56, 5, 9]
    const aNumerosOriginal = aNumbers.slice()

    aNumbers.sort( (a,b) => a-b )
    console.log(aNumbers)
    console.log(aNumerosOriginal.reverse())
    console.log(aNumerosOriginal)


    let nombres = ['luis', 'ramon', 'juan','rosa']
    console.log(nombres.slice(1,2))
    nombres.slice()
    console.log(nombres)
    //metodos que permiten fraccionar arrays de manera inmutable

let seleccion = nombres.splice(1,3)
console.log(seleccion)
console.log(nombres)

//clonar
let clon = nombres.slice() //si no le das un inicio o un final , es decir si no le damos parametros nos devuelve todos los elementos , por lo tanto se puede utilizar el slice para clonar un array

    //fraccionar arrays de forma mutable


  let eliminados = nombres.splice(1,3, 'pedro', 'ernesto')

    console.log(Seleccion)
    console.log(nombres)

    //
    let paises = ['francia','italia']

    paises.splice(2,0,'españa')

console.log(paises)

    
    // splice es un estractor de partes de array 

    //una pila en informarica se llama stack FILO 'el primero en entrar es el ultimo en salir  first in low out 
    //para iniciar este proceso tenemos dos metodos el .push --> 
    
    //y el . o -->
    console.log(paises.push('portugal' , 'alemania'))//push es la mas importante 
   
    paises.pop()//inserta un elemento al principio

   console.log(paises)
   //colas -->heap FIFO
   paises.shift()//inserta el nuevo elementoal principio
   paises.unshift()// quita un nuevo elemento al principio de un array.