function asincrona() {                                 //funciones promesa que crean una promesa y el ordenador espera si se ha cumplido o no 
    return new Promise((resolve,reject)=>{
        let i = Math.random()
        setTimeout(()=>{                                 //  creamos una funcion que se ejecuta a los 2000 segundos con la promesa
            if (i<0.7){
                //ok
                resolve('exito ' +i)
            }else{//error
                reject(new Error('error numero '+i))
            }
        },2000)
    })                          //las promesas tienen las funciones resolve y rejet que respectivamente es cuando se cumple y cuando no se cumple
}


for (let i = 0; i < 100; i++) {}
    
    asincrona()
.then((response)=>{console.log(response)})            //se suele llamar response pero se puede llamar de cualquier manera , es un objeto que llega dentro de response
.catch((error )=>{console.log(error.mensage)})            //se pone error normalmente y como lleva un mesnsage asociado el .message
//^el catch se puede quitar



