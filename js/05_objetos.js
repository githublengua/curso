//si estamos en java , c## , PHP
//Los objetos dependen de las clases

//class Persona{}
//p1= new Persona()
//p2 = new persona()
// En js tenemos objetos literales basados en la nocion json 
//let puede ser p1 y es lo que esta entre las yaves


let p1 = {
    nombre:"pepe",
    edad: 33,
    direccion:{
        calle:23,
        numero :44,
        ciudad :luxemburgo,
    },
    isAlumno : true,

aficiones : ["pintar" , "cosa"]
}
let p2 = {
    nombre:"rosa",
    edad: 35,
    isAlumno: true,
}

p1.altura = 179,
p2.colorpelo = "rubio",

console.log(p1.direccion.calle)
console.log(p2.nombre)
console.log(p1.nombre)
console.log(p1,direccion,ciudad)
let propiedadOcampo = "edad"
console.log(p2[propiedadOcampo])

for (const key in p2) {
// el bucle forin recorre un objeto en este caso p2 en cada bucle coje cada elemento la clave key es la constante a la que se refiere
        const nombre = p2[key];
        console.log(`la propiedad nombre vale el valor que se le asigna ${key} vale $(value)`)
}
    

console.log('mostrar' + p1)

