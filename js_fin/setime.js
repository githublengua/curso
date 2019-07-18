setTimeout(()=>{
    console.log('hola')
},2000)


let handler = setTimeout(()=>{
    console.log('hola')
},2000)

setTimeout(()=>{
clearTimeout(handler)
},2050)


