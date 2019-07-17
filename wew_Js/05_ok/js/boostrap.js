/* 
function app() {
    console.log('Cargada app')
console.log(document)
console.dir(document)

// Nodos del DOM
const btnNormal = document.querySelector('#btn-normal')
const btnSuper = document.querySelector('#btn-super')
const inNombre = document.querySelector('#in-nombre')
const outSaludo = document.querySelector('#out-saludo')

const inNombre2 = document.querySelector('#in-nombre2')
const outSaludo2 = document.querySelector('#out-saludo2') */


/* Otra opción serio
const nodos = {
    btnNormal : document.querySelector('#btn-normal'),
    btnSuper : document.querySelector('#btn-super'),
    inNombre : document.querySelector('#in-nombre'),
    outSaludo : document.querySelector('#out-saludo')    
} */

// Manejadores de eventos
// btnNormal.onclick = saludar
// btnSuper.onclick = protestar
/* btnNormal.addEventListener('click', saludar)     //click hace que se dispare el evento
btnSuper.addEventListener('click', protestar)

inNombre2.addEventListener('input', escribirContinuo)

function saludar() {
    outSaludo.textContent =                   //añade texto en un parrafo
        `Hola ${inNombre.value}`
}

function protestar() {
    outSaludo.value = 
        'Te he dicho que no tocaras'
}

function escribirContinuo() {
    outSaludo2.value = inNombre2.value
}

} */
//window.addEventListener('load') // escucha el elemento carga de la ventana 


//document.addEventListener('DOMContentLoaded',app)  //no lo carga hasta que se carga todo


/* click
focus 
imput
scroll
sellect
submit
DOom
eventos 
event listner */

import {app} from './app.js'
document.addEventListener('DOMContentLoaded',app)