/* const dado = {
    _valor: null,                       //el guion bajo represeta que es una propiedad privasa
    lanzar: function () {
        this._valor = parseInt(Math.random()*5) + 1
        console.log(this._valor)
    }
}
console.log(this._valor) 

for (let i = 0; i < 20; i++) {
dado.lanzar ()
//dado._valor = 6
console.log(dado._valor)                           //se puede representar de las dos maneras pero la manera ermetica es mas segura
    
} */

//vamos a definir propiedades y metodos

//se pone let para cambiar una propiedad de un objeto en la propiedad de una funcion

//como se haria si existieran ambitos privado y publico






 //ALGO ESTA MAL

/* const Dado= {
    _valor : null,
    set:function () {
     this._valor = parseInt(Math.random()*5) + 1
    },
get: function () {
    return this._valor
}
}
    for (let i = 0; i < 20; i++) {
        dado.set ()
    
    console.log(dado.get())}



 */





        //dado._valor = 6
                              //se puede representar de las dos maneras pero la manera ermetica es mas segura
            //getters y setter permiten dar valor a las variables privadas 
            //get = leer un valor privado
            //set define o instancia un valor privado



            //es5 Java script accesors, o dinamicas (Getters and setters) son propiedades que funcionan como metodo


            const persona = {
                nombre: 'Pepe',
                APELLIDO: 'pérez',
                edad :23,
                _curso: '',                                                    //GET Y SET NO SON MUY USUALES
                get curso () {return this._curso},
                set curso (curso){this._curso = curso},
                 get verNombrecompleto() {
                    return `${this.nombre} ${this.APELLIDO}`
                    
                }
            }
            persona.curso = 'Angular'
            persona._curso = 'JS'

            console.log(persona.curso)
            console.log(persona.verNombrecompleto)