/**
 * @description devuelve un array eliminando los nombres
 * @param {string} letra
 * @param {array} aNombres
 *@returns {array} 
 * 
*/
//jsdoc las palabras que se escriben detras del @ son las palabras definidas del lenguaje 
function limpiarArray( letra = '', aNombres = [] ){
 const aDatos = aNombres.slice()
     for (let i = 0; i < aNombres.length; i++) {
         const item = aNombres[i];
        if (item[0].toLowercase() === letra.toLowecase()) {
            aDatos.splice(i,1)
            i--
        } 
     }   return aDatos
}

let l = 'r'
let aUsuarios = ['rosa','raquel','eLENA','elena','maria',]

limpiarArray = (l, aUsuarios)
console.log(aUsuarios)

//parametros elementale

function algo(h) {
    h = h * h
} //algo recoje el valor o dato que esta dentro de h  en este caso 4
    let z = 4

    algo(z)
    

console.log(algo )

//parametros y referencias
//fraccionar arrays  mutable
function aCuadrados (a) {
    for (let i = 0; i < a.length; i++) {
        const item = array[i];
        
    }

    
}


let x = [1,2,3]
aCuadrados(x)
console.log(x)