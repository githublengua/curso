/* console.log('ee')

function saludar() {
    console.log('hola has echo clicl')
    
}
console.log(document)
console.dir(document)
console.log()
document.querySelector('#btn-super').onclick = saludar

 */

    
console.log('Cargada app')

function saludar() {
    console.log('Hola, desde una función')
}

console.log(document)
console.dir(document)

document.querySelector('#btn-super').onclick = saludar
document.querySelector('#btn-super').title = 'info desde JS'