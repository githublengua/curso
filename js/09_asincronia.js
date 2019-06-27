/*Asincronia
* en otros lenguages el multi-hilo = multihread
*En javascript hay un solo hilo
*que gestiona el bucle de eventos
 */
//los procesos asincronicos se representan con set.timeout(camelcase)
setTimeout ( () => { 
    console.log('mengsage 1')
    ), 0)
    console.log('mengsage 2')
    console.log('mengsage 3') 
    setTimeout(() => {
    console.log('mengsage 4')
    console.log('mengsage 2')
},2000)
console.log('mensage 6');