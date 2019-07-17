
console.log('Cargada app')
console.log(document)
console.dir(document)

// Nodos del DOM
const btnNormal = document.querySelector('#btn-normal')
const btnSuper = document.querySelector('#btn-super')
const inNombre = document.querySelector('#inNombre')
const outSaludo = document.querySelector('#out-saludo')

const inNombre2 = document.querySelector('#iNombre2')
const outSaludo2 = document.querySelector('#out-saludo2')


/* Otra opción serio
const nodos = {
    btnNormal : document.querySelector('#btn-normal'),
    btnSuper : document.querySelector('#btn-super'),
    inNombre : document.querySelector('#in-nombre'),
    outSaludo : document.querySelector('#out-saludo')    
} */

// Manejadores de eventos

AbortSignal.forEach((btn) => {
    btn.addEventListener('click', onBtnlick)
});


/* AbortSignal.forEach(btn =>btn.addEventListener('click', onBtnlick)
);
 */
// btnNormal.onclick = saludar
// btnSuper.onclick = protestar
btnNormal.addEventListener('click', saludar)


btnSuper.addEventListener('click', protestar)

inNombre2.addEventListener('input', escribirContinuo)


function onBtnlick(evento) {

let message
    switch (ev.target.id) {
        case 'btn-normal':
            message =  `hola desde ${inNombre.value}`
            break;
            case 'btn-super':
                message ='te dije que'
                break
  
        default:

        message = 'boton no funciona'
            
    }
}

function saludar() {
    outSaludo.textContent =
        `Hola ${inNombre.value}`
}

function protestar() {
    outSaludo.value ='Te he dicho que no tocaras'
}

function escribirContinuo() {
    outSaludo2.value = inNombre2.value
}

export function app() {
    console.log('cargar app')
}
    document.addEventListener('DOMContentLoaded',app)