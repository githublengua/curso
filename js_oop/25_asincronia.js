/**
 * ASINCRONIA  
 * Es un proceso que consume tiempo 
 *       se puede consumir el tiempo de manera bloqueante o no bloqueante
 * 
 * si no es bloqueante cuando se ejecuta envia la accion a la cola de eventos
 * cola de eventos / o bucle con una cola de eventos
 * 
 *cuando el procesador se queda sin nada que hacer comprueva la cola de eventos
 * 
 * 
 * 
 */

 //proceso bloqueante de 1 seg                       tardara un segundo por que es un proceso bloqueante
 //siguiente proceso

 //proceso no bloquente de 1 seg                     
 //siguiente proceso     
 
 
 setTimeout( () =>console.log ('mensage1'),0)
 
 console.log('proceso 2')
 console.log('proceso 3')
 setTimeout(() =>  console.log('proceso 4'),2000)

 setTimeout( () =>  console.log('proceso 5'),1000)

 console.log('proceso 6')
 setTimeout( ()=>console.log(`s`),20 )