/* const respuestas = [
    '',
    ['Esto es un mensaje', 3],
    ,
    ['construido a cachitos', 7],
    ,
    ,
    ,
    ['mediante la lectura secuencial', 8],
    ['de varios items de un array', ]
]


function leerDatosAsinc(i, timer = 1000,) {  
    return new Promise((resolve)=>{                       //no se ultiliza el rejet
 setTimeout(() => {
     if (i) {
          console.log(`lectura de datos número ${i}`)
            resolve(respuestas [i])
     }else {
        reject(new Error ('error de lectura'))
     }
           
        }, timer)
    })                                       //se quita el callback y se sustitulle por new promise
   
}                                               //()=>{}f

let i = 1                             
leerDatosAsinc(i,2000)
.then((aDatos)=>{
leerDatosAsinc(i, 2000, (aDatos) => {
    console.log(aDatos[0])
    i = aDatos[1]
    return leerDatosAsinc(i, 3000)
}).then ((aDatos)=>{
    return leerDatosAsinc(i, 2000, (aDatos) => {
            console.log(aDatos[0])
            i = aDatos[1]
            return leerDatosAsinc(i, 1000)
}).then((aDatos)=>{
    return  leerDatosAsinc(i, 2055, (aDatos) => {
        console.log(aDatos[0])
        i = aDatos[1]
        leerDatosAsinc(i, 1000)
}).then((aDatos)=>{
    leerDatosAsinc(i, 2000, (aDatos) => {
        console.log(aDatos[0])
        i = aDatos[1]
        leerDatosAsinc(i, 1000)
}).then(aDatos) => {
        console.log(aDatos[0]) }
                      // se cambia el anidamiento por encadenamiento



console.log('Leyendo los datos')                         //let z undefined / false /null/nan / 0 
    



 */



 
const respuestas = [
    '',
    ['Esto es un mensaje', 3],
    ,
    ['construido a cachitos', 7],
    ,
    ,
    ,
    ['mediante la lectura secuencial', 8],
    ['de varios items de un array', 9 ]
]

function leerDatosAsinc(i, timer = 1000) {
    return new Promise( (resolve, reject)=>{
        setTimeout(() => {
            if (i) {
                console.log(`lectura de datos número ${i}`)
                resolve(respuestas [i]) 
            } else {
                reject(new Error('Error de lectura'))
            }
        }, timer)
    })

} 

let i = 1
leerDatosAsinc(i, 2000)
.then( (aDatos) => {
    console.log(aDatos[0])
    i = aDatos[1]
    return leerDatosAsinc(i, 3000)
}).then( (aDatos) => {
    console.log(aDatos[0])
    i = aDatos[1]
    return leerDatosAsinc(i, 2000)
}).then( (aDatos) => {
    console.log(aDatos[0])
    i = aDatos[1]
    return leerDatosAsinc(i, 1000)
}).then( (aDatos) => {
        console.log(aDatos[0])    
}).catch( (error) => {
    console.log(error.message)
})


console.log('Leyendo los datos')
