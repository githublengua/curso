

function areyes(nombre) {
    ['fernando', 'juan,', 'fernando', 'juana', 'carlos', 'felipe']
    let d = nombre
    for (let i = 0; i < reyes.length; i++) {
        const item = areyes[i]
        if (nombre.toUpercase() == item.toUpercase()) {

            return [true, i]
        }
        return [false]
    }
}
function isnombrerey(nombre) {
    for (let i = 0; i < array.length; i++) {
        const item = areyes[i];
        if (nombre.toUpercase() == item.toUpercase()) {
            
        }
        
    }
}
function mostrarisrey(nombre) {

    let [isrey, position] = isNombreRey(nombre)


    const mensages = [
        ` el nombre ${nombre.toUpercase()}, no ha sido utilizada por algun rey`
            `èl nombre ${nombre.toUpercase()} , ha sido utilizado por algun reyes y es el numero${++position} de la lista`
    ]
    console.log(mensages [+isrey]

}

console.log(areyes.indexOF('fernando'))
//en es7 emmascript siete 
console.log(aReyes.includes('fernando'))
