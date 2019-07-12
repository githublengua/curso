const Factorial = require("./01_factorial.js")

/**
 * 1 - Funcion booleana que comprueba 
 *      que un valor puede ser tratado como número
 * 
 * 2 - Función que comprueba que es un número válido
 *      para poder calcular un factorial
 * 
 * 3 - Función que calcula el factorial de un número
 *      En caso de valores no válido, gemera un error    
 * 
 * 4 - Función que muestra (renderiza) los resultados por pantalla
 * 
 * Al menos para las 3 primeras, realizar tests unitarios
 *  
 */

try{ const n = 21
    const f_21 = new Factorial(n)   
    f_21.renderizar ()
   
    const e = 'pepe'
    const f_pepe = new Factorial(n)   
    f_pepe.renderizar()


    new Factorial(70).renderizar()
   } catch (error){
       console.log('error mensage')
   }
   
 const n = 21
 const f_21 = new Factorial(n)   
 f_21.renderizar ()                   

 const e = 'pepe'
 const f_pepe = new Factorial(n)   
 f_pepe.renderizar()
