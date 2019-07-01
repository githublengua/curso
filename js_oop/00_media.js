/* 
* @description : funcion que calcula la media de n numeros independientes
* @param {...[]num} n
* @returns {number}
*/
//  


/*
function media(...aDatos){
let r = 0
 return r

} 
media(2,4,6,8)

*/
/*
function mediaArray(aDatos = []) {

    let r = 0

    for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
        r += item
    
    } 
     return r /aDatos.length
}
    console.log(mediaArray([2,3,4,5,5,5])) 

*/
/*
function mediaTotal(...aDatos) { //rest operator .
    let r = 0
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if(Array.isArray(item))
    }{
           r += mediaTotal(...item)//con estos tres puntos se envia el array se descomponen se llama spread operation
        } else {
            r += a mediaTotal
        }
    }
    return r / aDatos.length
}
*/
console.log(mediaTotal([1,2,3].2.3.4[2,3,4])
//para calcular esta media se divide el proceso en dos partes 

//las funciones anidadas, cuando una funcion esta dentro de otra esta solo eciste en la media 


function mediaTotal(...aDatos) { //rest operator .
    let r = 0
    let n = 0 //es el numero de veces que hace el conteo
    r += sumaTotal(...aDatos)
    console.log(n)
    return r/n
    
        function sumaTotal(...aDatos)
        let s = 0
        for (let i = 0; i < array.length; i++) {
            const item = aDatos[i];
            if(Array.isArray(item)){
               s += mediaTotal(...item)//con estos tres puntos se envia el array se descomponen se llama spread operation
            } else {
                s += item
                n++
            }
        }
        return s
    }
    
  console.log(1,2,3,[2],4[5,6]);