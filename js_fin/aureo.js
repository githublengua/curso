/**
 * @describe calcularfibonacci
 * @param {number}
 * @returns {array}
 */

function calcularfibonacci(limite) {
    if (limite<1)
    {
console.log(error)
    }
let aFibo = [0,1]
let i = 0
let j = 1
let aFibo = [i,j]
do {
    aFibo.push(i+j)
    i =j
    j = aFibo[aFibo.length-1]
} while ((i+j)<=limite)

return aFibo  
}
let limite = 10
try {
    console.log(calcularfibonacci(limite))
} catch (error) {
    console.log(error.mensage)  
}








/* 

let a = 32
let d =1
let b =0


for (let i = 1; i < 10; i+i ) {

let c = [i]+[i-1]
let otro =  d+b
 let cont = i+(c)
   

}


const calcular = (callback) => {

    return  callback(console.log(c))
}

 */


/* 
let limite = 10
let acumulador = 0
let maximo = 100
let contador = 0
for (let i = 0; i < limite; i++) {
    contador = i
    console.log(i)
    if ( acumulador + (i*i) > maximo) {
        break
    }
    acumulador += (i*i)
}
 */