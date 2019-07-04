//todas estas funciones ejecutan un bucle sobre el array y ejecutan la funcion una vez en cada vuelta esta funcion puede tener asta tres parametros 
//no tiene por que ser arrow o anonima pero se puede aprobechar el uso de la funcion llamada
//esta llamada va a ejecutar item los parametros
const aDatos = [2, 3, 5]

/*
aDatos.map((item,i, Array) => {})  //esta funcion se utiliza para identificar los elementos de una matriz y poder utilizarlos cambiando su valor. n

aDatos.filter(item,i, Array) => {}) //vale para filtrar arrays de los que desconocemos los elementos , por ejemplo en este caso vamos a sacar solo los pares

aDatos.some((item,i, Array) => {})
aDatos.every((item,i, Array) =>{})
aDatos.foreach((item,i, Array) =>{})

*/

aDatos.forEach
    (
        item => { console.log(` - ${item} `) }
    )          //da igual lo que devolvos

for (const item of aDatos) {
    console.log(` - ${item} `)
}
//desde el for each podemos crear listas ^^^^

//proyectar o manejar un array 
//esta funcion se utiliza para identificar los elementos de una matriz y poder utilizarlos cambiando su valor. n
//
/* esta funcion es igual que la de abajo
function cuadrados(aDatos =[]) {
    return aDatos.map(item => item * item)

}
console.log(cuadrados(aDatos))

*/
const cuadrados = aDatos => aDatos.map(item => item * item)

let aUsuarios = ['fernando', 'juan,', 'fernando', 'juana', 'carlos', 'felipe']
console.log(aUsuarios.map(item => item.toUpperCase()))

//FIltros de array 
//vale para filtrar arrays de los que desconocemos los elementos , por ejemplo en este caso vamos a sacar solo los pares


function pares(aDatos = []) {
    return aDatos.filter(item => !(item % 2)) //el filtro odentifica a los que cumplen la condicion

}
console.log(pares(aDatos))


function pares(aDatos = []) {
    return aDatos.filter(item => (item % 2)) //el filtro odentifica a los que cumplen la condicion

}
console.log(pares(aDatos))

//reduce =>reduce un array en un solo numero, vamos a poder calcular en este ejercicio la suma total
function sumaTotal(aDatos = []) {
    return aDatos.reduce((previo, item) => { return previo + item })
}

console.log(sumaTotal(aDatos))
//la funcion pares en formato condensado 

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> esta funcion no la has echo bien
/*
function media(aDatos = [] {
    let i = 0
     let sumaTotal = aDatos.reduce((acumulado, item, index) => {
        i = index
     return acumulado + item
     })

   return sumaTotal1 / ++i   //si el ++ va detras le aumenta el valor despues del calculo 
     
 }

console.log('sumaTotal':  (aDatos))
console.log(media)




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>esta funcion no la has echo bien
/*
function media(aDatos = [] {
    let i = 0cd
     return aDatos.reduce((acumulado, item, index) => {
        i = index
     return acumulado + item
     }) / ++i

   return sumaTotal1 / i   //si el ++ va detras le aumenta el valor despues del calculo 
     
 }

console.log('sumaTotal': , (aDatos))
console.log(media)
*/

const aReyes = ['fernando','isabel', 'juana', 'felipe']

function isNombreRey(nombre) {

    return aReyes.some(item =>nombre.toUpperCase() === item.toUpperCase())
    
}
console.log(isnombrerey('fernando'))
console.log(isnombrerey('isabel'))