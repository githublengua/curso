'use strict'

Datos
Indefinidos:
undefine
Primitivos
number
string
boolean
Referenciados:
objects - Array - Date - Error - RegExp - Math - JSON - Function
Variables y constantes


Tipo: débiles (implícitos al valor) y dinámicos

Variables - Ciclo de vida: 
 declaración & inicialización : asignación                           
 
Ámbito - global          //las variables pertenecen como ambito al bloque o a la funcion
 - local 
 - al bloque => let / const (ES6)                   
 - a la función => var

Constantes - Ciclo de vida: declaración + inicialización

Constantes referenciadas -> es constante la referencia */
```JS

let x = {
    let y 
    y = x //dos referencias al mismo objeto

    El paso de parametros solo pasa a la referencia 
    
}
}
```
Hoisting de funciones declaradas y variables var (solo la declaración)

Casting
Cambio de tipo temporal durante una operación                    //cuando la operacion termina el valor al que se                                                                      referia deja de ser 

Casting a string
```JS
let n = 23
let msg = 'Juan tiene ' + n // 'Juan tiene 23'
console.log(typeof n)


Casting a number

let indice = '34'
let incremento = indice * 0.10

```

```Js
Casting a boolean

Falsy:

- false
- undefined
- null
- 0
- NaN
- ''
Truly - true - 23 - -34 - ' ' - 'Pepe' - {} - []
```
Operadores

Aritméticos: + - * / ** ()

uNARIOS : + , - , POSITIVO NEGATIVO

++ / -- incremento , decremento

de bits : ^(XOR) no aprender

relacionales : == , iguales en valor   !=,  === , igualdad en tipo y valor, !== diferete en tipo y valor 
<, >, >= , >=

operadores logicos:

&& (y)   || (o)

operadores de asignacion 

Ejercicios
Funciones aritmeticas básicas / función de renderizacion
Casting (07_casting.js) - control básico de entrada de "operables"
Comprobar edad (08_booleans.js - 09_errores.js)
Control de entrada de "operables" y control de errores
Comprobar paridad (10_pares.js - 11_pares_try.js)
Testing con jasmine
JS Core - continuación

Estructuras de control
 
 if 

 for (utilizado en arrays o strings
 )


 forof(solo se puede utilizar en arrays y string)


Ejercicios
Multiplos (02_multiplos.js)
Funciones aritmeticas básicas con gestión de errores (03_calculos.js)
Suma de cuadrados (04_funciones.js)
Recorres objetos recursivo (06_recorrer_objetos)