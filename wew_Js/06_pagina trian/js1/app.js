
export class App {
    constructor(){
        this.btnNormal = document.querySelector('#btn-normal')
        this.btnSuper = document.querySelector('#btn-super')
        this.inNombre = document.querySelector('#in-nombre')
        this.outSaludo = document.querySelector('#out-saludo')
        this.inNombre2 = document.querySelector('#in-nombre2')
        this.outSaludo2 = document.querySelector('#out-saludo2')
        
       // manejadores de eventos
       this.inNombre2.addEventListener.bind(this)        //para fijar si aparece this antes que event listener sacaba con bind (this)
    }
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
  console.log('Cargada app')




    console.log('cargar app')
  
    console.log(document)
    console.dir(document)

    // Nodos del DOM
    


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






