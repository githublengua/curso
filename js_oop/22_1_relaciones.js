function Direccion (calle,numero,ciudad,pais)
{
    this.calle= calle
    this.numero = numero
    this.ciudad = ciudad
    this.pais = pais
}

function Persona (nombre, edad,Direccion) {                   
    this.nombre = nombre
    this.edad = edad
    this.Direccion = Direccion  
    this.Mascota = [] }            //relacion de asociacion que se establece a nivel de atributos 
                                       //despues del this puedes nombrar la propiedad 

Persona.prototype.comprarMascota  = function (Mascota) {
    this.mascotas.push(Mascota)
//dependencia
}       
function Mascota(nombre,especie) {
    this.nombre = nombre
    this.especie = especie
  
}

const p1 = new Persona(
    'pepe',
    34,
new Direccion('c/pez',7,'cadiz','españa') 
);

const m1 = new Mascota('Amedio','mono')
const m2 = new Mascota ('Perry','ornitorrinco',)


p1.comprarMascota(m2)
console.log(p1)
console.log(p1.mascotas[0],nombre)

/* function Persona (n, edad)          {
    this.nombre = n                                   //despues del this puedes nombrar la propiedad 
}          */


function Alumno(nombre,edad,direccion,centro,curso) {
    this.curso = curso 
    Persona.prototype.constructor.call(this,nombre,edad,direccion)
}
Alumno.prototype = new Persona()
Alumno.prototype.constructor = Alumno()


console.log(a1 instanceof Alumno)
console.log(a1 instanceof Persona)
console.log(a1 instanceof Object)