//vamos a crear una funcion que comprueve si una cadena tiene mayusculas o minusculas

'use strict' 

/** funcion comprobarCaso()
 * *@description comprobar si la cadena tiene :
 * *solo mayusculas (0)
 * *solo minuscilas(1)
 * *mayusculas y minusculas(2)
 * 
 * *@param {string} cadena
 * *@returns {number} 
 */


 //dentro de las funciones o hay ciclos o bucles o condiciones

 let x = 'esto es una cadena que mezcla mayus y m'


function comprobarCaso (cadena = ''){

    let r = 2
    
    if (cadena == cadena.toUpperCase()){ //eres mayusculas

    } else if (cadena == cadena.toLowerCase()) { //eres solo minusculas
        r = 1
    }
    return r 
}
function mostrarComprobacionDeCaso(cadena = '') {
 const msg = [
     'solo mayusculas',
     'solo minúsculas',
     'mayusculas y minusculas',
 ]
  console.log(msg[comprobarCaso(cadena)])

}
  console.log(mostrarComprobacionDeCaso('cadena'))

  module.exports = {  }
  module
  module