function calcular(a, b, operacion, callback) {
    let mesg = `el resultado de una $(operacion) con $(a)  y ${b}`
    return msg + callback(a,b);
}
function calcular(a, b, operacion, callback) => {
    let mesg = `el resultado de una $(operacion) con $(a)  y ${b}`
    return mesg + callback(a,b)}

console.log(calcular(4,6,'suma',function(x,y){return x+y}))
console.log(calcular(4,6,'resta',function(x,y){return x-y}))
console.log(calcular(4,6, 'multiplicacion',function(x,y)))

console.log(calcular(4,6,'suma',function(x,y){return x+y}))
console.log(calcular(4,6,'resta',function(x,y) => {x-y}))
console.log(calcular(4,6, 'multiplicacion',function(x,y)))



//para transformar una variable arrow a constante hay que poner la flecha => y al principio poner const (que es una variable que no cambia.)
