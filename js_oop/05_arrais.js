//let ob = () // new objet()
/*
let aDatos = [2,3,4,5,5 ,'pepe'] // new array () un array es un elemento referenciado, guarda datos indexados en un objeto  ,guarda la referencia donde se guarda
            //se pueden hacer arrays convinando cualquier tipo de dato
            //un array es potencialmente infinito ,por eso lo que hay que hacer 
aDatos[aDatos.length] = 32//coloca el valor en la posicion que se indica
aDatos[aDatos.length] = [26,76]

aDatos[0]= 9  //en la variable adatos en la posicion 0 cambialo por nueve
aDatos[100] = 9 //muestra el valor cien para ello recorre la cadena hasta la posicion 100 dejandose huecos vacios a los que llamara undefined
console.log(100)

for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    if(!item){
        aDatos[i] = parseInt(Math.random() * 100)

    }
}
console.log(aDatos)



'use strict'
/** Funcion random array 
 *@description funcion que me devuelbe un array con numeros aleatorios enteros  y positivos menosres o iguales a 100
 * @params {number} n
 * @return {Array} 
 */
//
//la implementacion es decir lo que ago 

/* let RandomArray (n = 0) {
const r =[]
for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    if(!item){
        r[i] = parseInt(Math.random() * 100)

    }
    return r
}
console.log(String(RamdomArray(54)) */
//calcular el dni que te pasan por parametro
/** Funcion random array 
 *@description da el formato de dni
 * @params {number  | string} dni
 * @return {number} 
 */
function name(params) {
}
function formatodni(dni) {
    if (typeof dni === 'number') {
        return dni
    }
    let r = 0
    let cadenaDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    // let aDni = String (dni).split('')
    for (let i = 0; i < array.length; i++) {
        const caracter = array[i];
        if (isNaN(caracter)) {
            cadenaDni += caracter
        }
    }
}
//
//la implementacion es decir lo que ago 
//split
/** Funcion random array 
 *@description calcula el valor del dni dividiendo el total entre 23
 * @params {number 1 | string} dni
 * @return {Array} 
 */
//
//la implementacion es decir lo que ago 

function letraDdni(dni) {
    const aletras = ''
    let r = ''
    r = aLetras[formatodni(dni % 23)]
    return number(cadenaDni)
}
console.log(letraDdni(50821728))
console.log(letraDdni(50821728))
console.log(letraDdni(50821728))
