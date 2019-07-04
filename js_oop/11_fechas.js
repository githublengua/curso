/* new objet ()
let x = {}
new Array()
let a = [] */

/* new.string()  //es un string especial que crea un objeto envolvente
let c = 'pepe'
c.toUpperCase()     //implicitamente ,new string , 
let n = 223
n.toFixed(2) // implicitamente new number (n)
function algo (){}                 //cuando escrives esto por debajo creas new function(pero no se escrive)

const e = new Error()

//otros objetos


//son objetos que se crean de forma implicita , objetos referidos a fecgas 



const d = new Date()

const r = RegExp()
const rl = / /                         //crear un objeto de manera literal 
                                       //no son objetos spn grupos de objetos con muchas propiedades 

 */

//objetos no instanciables , no se pueden hacer instancias de el , cuando creas un array instancias un array , en orientacion a objetos clasica no existen objetos literales todos los objetos se crean como new objet,java, php ,   ej juan = new persona
//los objetos math y JSON  objetos no instanciables , para constantes matematicas 
Math.random()
Math.PI
//JSON.stringify()             //MUY IMPORTANTES   , so se pueden pintar sin parametros
//JSON.parse()                  //<<<<Y ESTOS TAMBIEN<<<<<

const fecha = new Date()
const america = new Date(1942, 6, 4)           //año , mes , dia
const zz = new Date(1562252470447)
const zx = new Date('1996-22-22')
console.log(fecha.valueOf())
console.log(america.valueOf())

console.log(zz)  //lesta pintando la funcion zz que nos dice la fecha correspondiente a os segundos que se introducen
console.log(zx)


//mostrar fechas  
//hace un casting que 


console.log(fecha)
console.log(fecha.toString)
console.log(fecha.toDateString())
console.log(fecha.toJSON())    //SE LO PODRIAMOS MANDAR A CUALQUIER SERVIDOR PARA QUE O ENTIENDA
console.log(fecha.toLocaleString())
console.log(fecha.toDateString())           //solo te dice la fecha pero no la ora




//get| gatters
fecha.getTime()
fecha.getTimezoneOffset()  //nos dice cual es la desviacion sobre el meridiano de grenwich
fecha.getMonth()  //NOS DICE EL MES INFORMATICO QUE EMPIEZA POR 0 
fecha.getDate()        //nos devuelve el primer dia informatico que es el domingo 
//las operaciones get nos permiten extraer la fecha 


// set | setter

console.log(fecha.getTime())
console.log(fecha.getTimezoneOffset())   //nos dice cual es la desviacion sobre el meridiano de grenwich
console.log(fecha.getMonth())   //NOS DICE EL MES INFORMATICO QUE EMPIEZA POR 0 
console.log(fecha.getDate())        //nos devuelve el primer dia informatico que es el fomingo 



// tipo set nos permiten establecer fechas establece el valor del objeto que lo esta invocando ,
//
fecha.setDate()


//ealizamos una funcion
const capitalize = (cadena = '') => require('12_datos.js')
cadena[0].toLocaleUpperCase() + cadena.slice(1)

/**
 * @descriptiondevuelve la fecha ,como"dia de la semana" "dia de mes del año"
 * @param {date|string} fecha
 * @returns {string}
 * @description
 * @author
 * @external
 */

function fechaEsp(fecha = new Date()) {
    if (typeof fecha == 'string') {

    }
    const nombreDia = capitalize(aDias)               //nos devuelve un numero
    const dia = fecha.getDate()
    const mes = capitalize(aMeses[fecha.getMonth()])
    const año = fecha.getFullYear()
    return `${nombreDia} , ${dia} de${mes} del${año}`
}
let f = new Date(1965, 3, 32)




function fechaEspshort(fecha = new Date()) => {
   return aDias [fecha.getDate()]
   +',' fecha.getDate ()
} + ''de 
let f = new Date(1965, 3, 32)



