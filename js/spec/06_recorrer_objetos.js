/**
 * @description //recorre un objeto a tantos niveles como contenga y crea un string con la información
 * @param {objet} obj 
 * @returns {string}
 */
 //la key es el nombre que se le pone a un objeto este tiene valores que se leen 
 function objetToSring(obj) {
     let cadena = ''
     for (const key in object) {
         if (obj.hasOwnProperty(key)) {
             const element = object[key];
             cadena += `${Key}: ${value}`
             if ( typeof value == `objet`)
             // &&Array.isArray)){
                 cadena += `  ${key}: ${value} 
                 &{key}: ${objetToSring()value}}
                `
             } else{
                 cadena +=
                 ${key}: {value}

             }
         }
     }
     return `&{cadena}
     let p2 = {
        nombre:"rosa",
        edad: 35,
        isAlumno: true,

     }
 }

 alejandro