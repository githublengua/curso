function main ( ){
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