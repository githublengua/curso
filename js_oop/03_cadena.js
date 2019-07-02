 //let intl = require ('intl')
 //require('intl')
 
 let cadena = "esto no es buena practica";
 let otracadena = 'es mejor utilizar comillas si'
 let nuevacadena = `nuevo en ${version}` //template stream.

//las comillas francesas permiten interpolar variables y no modifica el dato 

//los objetos tream number y bolean surgen de manera automatica cuando tratamos al elemento como si buera un objeto.
//genera un objeto de manera automatica y temporal , este objeto emvuelve al stream y este tiene todos los metodos que tiene este stream.
//hay dos funciones las que afectan al objeto que las invoca y las que devuelven un resultado de aplicar los cambiosdentro de esta cadena, estas funciones son no mutables por que no mutan al objeto que las invoca
//

console.log(cadena, otracadena, nuevacadena)
console.log(cadena.toUpperCase())




console.log(cadena.length) //estas cadenas con lent hace que esta cade

console.log(cadena[0])  

for (let i = 0; i < cadena.length; i++) {
    const item = cadena[i];
    console.log(item)
}
//este ...rest(en este caso como quieras)cesta funcion devue en los puntos los parametros que se le asignan despues,rest es un conversor de los parametros que le entran dentro de las comillas , dentro se puede poner la posicion que queremos leer pero tambien podemos buscar por separadores como espacios o comas ,
let x = cadena.split() 
console.log(x)
console.clear;
//toUppercase poneen mayusculas, 
//el join es igual que es split.

/*
function rest(...agrupador)
console.log(agrupador[2]

//vamos a calcular la media con rest
*/
//vamos a crear una funcion que comprueve si una cadena tiene mayusculas o minusculas

cadena.substr()//debuelve un substring le pasamos los parametros inicio y final
cadena.substring()// le pasamos inicio y el desplazamiento


cadena.slice()//le decimos el principio y el final , por ejemplo desde aqui hasta..un final
cadena.match()
cadena.search()
cadena.replace() //busca las veces que aparece algo y lo sustitulle 
// las funciones de busqueda //
cadena.indexOf()//RECIBE UN STRING O CADENA Y ME DEBUELVE LA POSsicion en la que aparece a clave
cadena.lastIndexOf()//es la contraria a indexof nos devuelve el ultimo caracter que le preguntamos
cadena.charAt(posicion) //le pasas una posicion el valor numerico que ocupa en la cadena esto es igual que poner "cadena [position]"
cadena.charCodeAt(posicion)//nos debuelve la posicion del caracter 
String.fromCharCode (num)     //le pasas un numero y te da su codigo numerico, vale para hacer transformaciones de numero a cadena y de cadena a numero

let numero = 23 
console.log(numero.toString()) //convierte el numero a tring
console.log(numero.toFixed(2)) //te redonde a 2 decimales
console.log(numero.toPrecision(4)) //saca cuatro numeros de precision en este caso se pone entre parentesis
console.log(numero.toExponential()) //es un numero multiplicado por diez con la base que le insertamos si no decimos nada esta elevado en base 1.
console.log(numero.toLocaleString('es',{style :'currency' currency : 'EUR'})) //LOCALIZA DATOS Y SACA DATOS A CODIGOS LOCALES



















