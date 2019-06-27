function calcular(a, b, operacion, callback) {
    let mesg = `el resultado de una $(operacion) con $(a)  y ${b}`
    return msg + callback(a,b);
}
console.log(calcular(4,6,'suma',function(x,y){return x+y}))
console.log(calcular(4,6,'resta',function(x,y){return x-y}))
console.log(calcular(4,6, 'multiplicacion',function(x,y)))