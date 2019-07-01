let(comprobarCaso) = requeire ('../04.caso.js')
describe ('funcion comprbarCaso', () => 
    {
    it ('should be 0 if all MAY',() => {
        const cadena = 'HOLA PEPE'
        expect(comprobarCaso(cadena)).toEqual(0)
    });
    it ('should be 1 if all MAY all min',() => {
        const cadena = 'hola amigo'
        expect(comprobarCaso(cadena)).toEqual(1)
    })
    it ('should be 2 if all MAY & min',() => {
        const cadena = 'HOLA PEPE'
        expect(comprobarCaso(cadena)).toEqual(2)
    });

    describe ('funcion mostrarComprobacionDeCaso', () => {
        it ('should be -solo mayusculas')
        const cadena = 'HOLA PEPE'
        console.log = jasmine.createSpy("log")      //hace una espia sobre una funcion original, funciones de eventos que se disparan cuando tu quieres que se utilice 
        mostrarComprobacionDeCaso(cadena)
        expect(console.log).toHaveBeenCalledWith('mayusculas y minusculas')
        const msg = mostrarComprobacionDeCaso()
        let msg = mostrarComprobacionDeCaso(cadena)
      

        expect (msg).toEqual('solo mayusculas')//lo que espero es que e console log sea invocado 

    });