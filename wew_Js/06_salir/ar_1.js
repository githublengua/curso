export function app() {
    let btSalir = document.querySelector('#btn-salir')
    let dlgcancelar = document.querySelector('#dlg-cancelar')
    let handler 
    btnSalir.addEventListener('clic',onClic)

    function onClic(ev) {
        let url = 'https://www.google.com/'
        let msg = `<section>
        <p>nos vamos a google <button id ='btn-cancelar'>cancelar</button>
        </p>
    </section>
        `
        handler = setTimeout(()=>{location.assign(url)},2000)
        
       // 

      // out.value = msg  ElementOutput
     // out.textConten =msg  texcontent muestra el mensage versiones anteriores
     out.innerHTML =msg
     btnCancelar = document.querySelector('#btnCancelar')
     btnCancelar.addEventListener('click',onCancel)
    }
    function onCancel() {
        
        clearTimeout(handler)
        out.HTML =dlgcancelar.close()



                    //
    }
}  setInterval(() =>{console.log(++i)},100)   