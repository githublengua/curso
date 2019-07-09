/**
 * this es una caracteristica de las funciones de javascript ,no tiene un comportamiento consistente, puede significar varias cosas, 
 * tenemos 4 formas de ejecutar la misma funcion
 * 
 * estas 4 formas son los patrones de invocacion y cambian el significado de this.(no sera lo mismo segun usemos un patron u otro)
 * 
 * 
 * hay cuatro patrones principales
 * 
 * *
*/
function algo ( ){
    console.log(this)                 //this es un objeto cuando va entre parentesis , es el objeto principal, 
}
 //Función

 algo()                                   //this es proceso de (node) o windows(browser)

 // Metodo


 const o = {nombre : 'pepe',edad:23}     
                                            //o.algo es un metodo
 o.algo = algo                             //se asigna a el metodo 
 o.algo()                                 //ejecutamos o.algo  this es el objeto al que pertenece el metodo , el unico caso en el que se utiliza this
                                     //THIS SE UTILIZA DENTRO DE LOS METODOS IMPORTANTE


 // Constructora

//const nuevo                        //en nuestra funcion se crea un objeto vacio ,cuando la ejecutamos como constructora, con la clase que emos creado si nombrada
                                    //this es el objeto nuevo o contruido

 // o indirectamente(apply o call)


const otro = {                                 //crea un objeto se lo pasa a la funcion si no esta tal objeto nos la devuelve como una funcion constructora
    tipo: 'perro',
    nombre:'Rufo'

}                                                     //this es el objeto que 2toma prestada la funcion.
algo.call(otro)                                     //puede ser llamada por un objeto concreto, 
 algo.apply(otro)                                   //quiero que la llame el objeto otro  ,le presta una funcion a un objeto para que la utilice como sulla 
 //


console.log('----------------------------------------------')


const persona = {nombre : 'pepe'}
persona.saludar = function () {
    console.log(`hola soy ${this.nombre}`)
}
    persona.saludar()
  setTimeout(persona.saludar,2000)  
              //el bind vincula de forma precisa el objeto al this
                        // process.setTimeout(persona.saludar,2000)       
                          //   el proces no hace falta escribirlo pero se refiere a node
                        //es una funcion  que sera utilizada como callback , le das una funcion a otra para que la ejecute.


   console.log('------------------------------------------------------------------')

//en las funciones arrow this el consistente es deci
//SIEMPRE ES LA PROPIA FUNCIÓN -> se llaman landa en programacion funcional
// las arrow las utilizamos como callbacks donde no alla un this

                        persona.saludarArrow = () => {
                        console.log(`hola soy ${this.nombre}`)

                        }
                        persona.saludarArrow ()
                        algoArrow = () => {                                    
                            console.log(this)
                        }

                        setTimeout(persona.saludar.algoArrow,2000)  
                        setTimeout(persona.saludar.bind(persona),2000)      

clear.log()
console.log(Math.random()*6)
