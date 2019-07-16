

console.log('cargada la app')
console.log(document)
console.log(document)


//recojer los nodos del documento
//nodos del DOM
//creamos variables para organizar el codigo

const btn = document.querySelector('#btn')
const btnSuper = document.querySelector('#btn-super')
const isNombre = document.querySelector('#nombre')
const outSaludo = document.querySelector('#salida')


const inNombre2 = document.querySelector('#nombre2')
const outSaludo2 = document.querySelector('#salida2')

/* const nodos = {
    btn : document.querySelector('#btn'),
btnSuper : document.querySelector('#btn-super'),
isNombre : document.querySelector('#nombre'),
outSaludo : document.querySelector('#outSaludo')
} */

//manejadores de eventos

/*

btnNormal.onclick = saludar      <<<<>>>>  no se usa
btnSuper.onclick = Protesta

*/


btn.addEventListener('click',saludar)

btnSuper.addEventListener('click',Protesta)
salida.addEventListener(salida)

inNombre2.addEventListener('input',escribirContinuous)
/* function saludar() {
    let user = document.querySelector('#nombre').value
    console.log(`hola ${user} desde la funcion`)

} */
function saludar() {
  outSaludo.textContent = `hola ${user} desde la funcion`
    console.log(`Hola ${inNombre.value}`)
}


function Protesta() {
    console.log('te he dicho que ..')
    outSaludo.value= 'te he dicho que no lo toques'
}
function escribirContinuous() {
    outSaludo.value = inNombre2
    
}
/* const btnNormal = document.querySelector('#btn')

const btnSuper = document.querySelector('#btn-super')




document.querySelector('#btn').onclick = saludar
document.querySelector('#btn-super').onclick = Protesta */

