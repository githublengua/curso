const b = {
    id: 123,

    nombre: 'pepe',
    mostrarid: function () {
        console.log(p.id)

    }                                                 //es una pop
}

function mostrarid(p) {
    console.log(this.id)                  //this se refienre al el valor de la propiedad

}

mostrarid(b)







const o = {
    id: 123,
    nombre: 'pepe',
    edad: 34,
    conocidos['juan','elena', 'raul']


    mostrarID: function () {CONSOLE.LOG(this.id)

    },


    saludar: function (otro = 'heater') {

    console.log(`hola ${otro}, soy ${this.nombre}`)
},
isconocido: funcion (otro){
    if (isconocido(otro)) { 
        console.log (`hola ${otro} soy ${this.nombre}`)

    } else {console.log(`hola ${otro}, soy ${this.nombre}`)
    }
},

}



o.saludar('heater')
o.saludar()

