
/**
 * @description: determinar si una frase es palindromo o no
 * @param: {array}
 * @return: {true | false}
*/


isPali = (cadena = '') => {
    let r = false
    cadenaSinEspacios = cadena.split(' ').join('').toLowerCase()
    console.log(cadenaSinEspacios)
    cadenaInversa = cadenaSinEspacios.split('').reverse().join('')
    console.log(cadenaInversa)
    if (cadenaSinEspacios === cadenaInversa) {
        r = true
    }
    return r
}

isPaliShort = (cadena = '') => {
    sinEspacios = cadena.split(' ').join('').toLowerCase()
    return sinEspacios === 
        sinEspacios.split('').reverse().join('') ? true : false 
}
console.log(isPali('IYKUYG'))




/*
module.exports = {}
module.exports.isPali = isPali
module.exports.isPaliShort = isPaliShort*/
'use strict'


let frase = [ '' ]
 function palindromo (frase) 
 for (let i = 0; i < frase.length; i++) {
     const (frase).reverse = frase[i];
     return true
     
     
 }
 return false