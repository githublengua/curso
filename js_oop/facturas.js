
 function Factura(empresa = {},
    cliente = {},
    Items=[{}],
    numFactura='',
    tipoIVA={},
    formaPago={},
    fecha={})
    {
     this.empresa =
     this.cliente = cliente
     this.Items = Items
     this.numFactura = numFactura
     this.tipoIVA = tipoIVA
     this.formaPago = formaPago
     this.fecha = fecha


    
 }


function DateEm (nombre,direccion,telefono,nif) {

        this.nombre = nombre ;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
function DateClient (nombre,direccion,telefono,nif) 
    { this.nombre=nombre;
         this.direccion=direccion; 
         this.telefono=telefono; 
         this.nif=nif; } 

 function Item(numFactura,tipoIVA,formaPago,fecha)
         { this.numFactura = numFactura; 
            this.tipoIVA = tipoIVA;
             this.formaPago = formaPago;
              this.fecha = fecha; }
 function Art (NumArticulo,NombreArt,descripccion=0,cantidad=0,precio)
    { this.NumArticulo = NumArticulo 
        this.NombreArt = NombreArt
         this.descripccion = descripccion 
         this.cantidad = cantidad
          this.precio = precio 
        } 
        
        

function iva() {
    Art[5] = this.precio * 1.04
    
}

Factura.ca
    
    const nombreEmp = new DateEm('nuevaempresa','La calle de la empresa',912934876,'96743658-Y',);

    const DateClient1 = new DateClient('ile','calle del cliente',945674587,'87656787-I'); 

      Items = new Item('1542-R',0.04,'efectivo', new Date()); 

     
      Id = new Art('15524-4','Angulos','Un agudo libro siempre y cuando se lea anguladamente', 1 , 23) 
       total_descuento = new Factura(Art.precio)

    console.log (Id)
     console.log(nombreEmp)
     console.log(DateClient) 
     console.log(Items)
     console.log(total_descuento)



     //definir una funcion constructora que 

function Factura(){}
function Empresa(){}
function Item(){}
function Direccion(){}



