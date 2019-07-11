/* function main ( ){
let datos
function leerDatosAsin(i,timer = 2000, callback){
 return setTimeout(                                     //lo que genera la asincronia es el setiout

     ()=>{
          
        console.log(`lectura de datos numero ${i}`)            
      datos = {data: 'muchos datos'}
leerDatosAsin(2,1000,(data)=>())
   },timer)
}

  const handler = leerDatosAsin(1,2000)
    console.log('leyendo los datos')
    clearTimeout(handler)
console.log(datos.data.UpperCase())




 */
/* const respuesta = [

  'algo',
  'algo 2 ',
 ' algo 3'
]
 
function leerDatosAsinc(i, timer = 1000, callback) {
  setTimeout(() => {
          console.log(`lectura de datos número ${i}`)
          callback(respuestas [i])
      },timer)
} 



//       
let i = 1   
leerDatosAsinc(1, 2000, (datos) => {
  console.log(datos)

     leerDatosAsinc(2, 2003, (datos) => {
      console.log(datos)
    i++
        leerDatosAsinc(3, 2000, (datos) =>{
               console.log(datos)
                leerDatosAsinc
   })

})
})




const cuadrados = (x) => {return x*x}

cuadrados(5)                 //asi se llama a la funcion cuadrado 




const cuadrado = (c) => {return c*c}
callback = cuadrado

callback (4)



 */






const respuestas = [
  '',
  ['Esto es un mensaje', 3],
  ,
  ['construido a cachitos', 7],
  ,
  ,
  ,
  ['mediante la lectura secuencial', 8],
  ['de varios items de un array', ]
]



function leerDatosAsinc(i, timer = 1000, callback) {
  setTimeout(() => {
          console.log(`lectura de datos número ${i}`)
          callback(respuestas [i])
      }, timer)
} 



let i = 1



leerDatosAsinc(i, 2000, (aDatos) => {
  console.log(aDatos[0])
  i = aDatos[1]
  leerDatosAsinc(i, 3000, (aDatos) => {
      console.log(aDatos[0])
      i = aDatos[1]
      leerDatosAsinc(i, 2000, (aDatos) => {
          console.log(aDatos[0])
          i = aDatos[1]
          leerDatosAsinc(i, 1000, (aDatos) => {
              console.log(aDatos[0])    
          })
      })
  }) 
})


console.log('Leyendo los datos')
  












