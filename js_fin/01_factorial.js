const { isEntero, isValidNumber }  = require('./01_helper.spect.js/index.js')

module.exports = class Factorial {

    constructor(n) {
        this.n = n
        this.factorial = 1
        if(this.preparar()) {
            this.calcular()
        }
    }

     preparar() {   
        if (!isValidNumber(this.n)) {
            throw new Error('El parametro no es un número')              //estos 
        } else if ( !isEntero(this.n) ){
            throw new Error('El parámetro no es un entero')
        } else if (this.n < 0) {
            throw new Error('El párámetro es negativo')
        } else {
            return true
        }
    }

    calcular() {
        if (this.n > 1) {
            for (let i = 2; i <= this.n; i++) {
                this.factorial *= i
            }
        }     
    }

    calcularAtras() {
        if (this.n > 1) {
            for (let i = n; i >= 2; i--) {
                this.factorial *= i
            }
        } 
        return r   
    }
}
renderizar ( ) {
let cadenaF = (this.factorial < 10000)
? this.factorial.toLocalString()              // ?    < if 
: this.factorial.toExponential( )            // :    < else
    let cadena =
    `
    el factorial de ${this.n} es ${cadenaF}`
    console.log(cadena)
}