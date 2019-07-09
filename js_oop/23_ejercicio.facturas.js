/*   Modo raro
 var DateEm = function(nombre,direccion,telefono,nif) {

    this.nombre = nombre ;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif = nif;
}
var DateClient = function(nombre,direccion,telefono,nif) 
{ this.nombre=nombre;
     this.direccion=direccion; 
     this.telefono=telefono; 
     this.nif=nif; } 
     var Items = function(numFactura,tipoIVA,formaPago,fecha)
     { this.numFactura = numFactura; 
        this.tipoIVA = tipoIVA;
         this.formaPago = formaPago;
          this.fecha = fecha; }

var nombreE = new DateEm('nuevaempresa','La calle de la empresa',912934876,'96743658-Y',);
 var DateClient = new DateClient('ile','calle del cliente',945674587,'87656787-I'); 
 var Items = new Items('1542-R','4%','efectivo',
 new Date()); console.log(nombreE)
 console.log(DateClient) 
 console.log(Items)

var Art = function(NumArticulo,NombreArt,descripccion,cantidad,precio)
{ this.NumArticulo = NumArticulo 
    this.NombreArt = NombreArt
     this.descripccion = descripccion 
     this.cantidad = cantidad
      this.precio = precio 
    } 
      var Id = new Art('15524-4','Angulos','Un agudo libro siempre y cuando se lea anguladamente', 1 , 23) 
      console.log (Id)



 */



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
 function Art (NumArticulo,NombreArt,descripccion,cantidad,precio)
    { this.NumArticulo = NumArticulo 
        this.NombreArt = NombreArt
         this.descripccion = descripccion 
         this.cantidad = cantidad
          this.precio = precio 
        } 
        
        

function iva() {
    Art[5] = this.precio * 1.04
    
}

    
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
