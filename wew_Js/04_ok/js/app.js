
export function app() {
    console.log('cargar app')
    console.log('Cargada app')
    console.log(document)
    console.dir(document)

    // Nodos del DOM
    const btnNormal = document.querySelector('#btn-normal')
    const btnSuper = document.querySelector('#btn-super')
    const inNombre = document.querySelector('#in-nombre')
    const outSaludo = document.querySelector('#out-saludo')

    const inNombre2 = document.querySelector('#in-nombre2')
    const outSaludo2 = document.querySelector('#out-saludo2')


    /* Otra opción serio
    const nodos = {
        btnNormal : document.querySelector('#btn-normal'),
        btnSuper : document.querySelector('#btn-super'),
        inNombre : document.querySelector('#in-nombre'),
        outSaludo : document.querySelector('#out-saludo')    
    } */

    // Manejadores de eventos

    /* abortSignal.forEach((btn) => {
        btn.addEventListener('click', onBtnlick)
    }); */

    inNombre2.addEventListener('input', escribirContinuo)

    // btnNormal.onclick = saludar
    // btnSuper.onclick = protestar

    btnNormal.addEventListener('click', saludar)
    btnSuper.addEventListener('click', protestar)



    function onBtnlick(evento) {
        console.log(evento)
    }

    function saludar() {
        outSaludo.textContent =
            `Hola ${inNombre.value}`
    }

    function protestar() {
        outSaludo.value = 
            'Te he dicho que no tocaras'
    }

    function escribirContinuo() {
        outSaludo2.value = inNombre2.value
    }
}
 