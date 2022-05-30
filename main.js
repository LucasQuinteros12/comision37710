alert("Bienvenido/a a la tienda n°1 en Productos Gamers");

class Pedido{
    constructor(producto, precio, cantidad){
        this.producto = producto,
        this.precio = precio,
        this.cantidad = cantidad,
        this.envio = 0,
        this.subTotal = 0,
        this.total = 0
    }
    calcularSubTotal(){
        this.subTotal = this.precio * this.cantidad;
    }
    calcularIva(){
        return this.subTotal * 0.20;
    }
    calcularEnvio(){
        if(this.subTotal >= 1000){
            this.envio = 0;
        }else{
            this.envio = 500;
        }
    }
    calcularTotal(){
        this.total = this.subTotal + this.envio + this.calcularIva();    
    }
}

function pedidoProducto(){
    let producto = 0;
    let cantidadProducto = 0;
    let precio = 0;

    while(!producto || producto == 0 || producto > 4){
        producto = parseInt(prompt("¿Que producto desea comprar?:\n 1: Teclado Kumara 552 RGB($6200)\n 2: Mouse Razer Black($2300)\n 3: Auriculares Genericos ($500)\n 4: Auriculares Logitech($3200)"))
    }
    
    switch(producto){
        case 1:
            producto = "Teclado Kumara 552 RGB";
            precio = 6200;
            break;
        case 2:
            producto = "Mouse Razer Black";
            precio = 2300;
            break;
        case 3:
            producto = "Auriculares Genericos";
            precio = 500;
            break;
        case 4:
            producto = "Auriculares Logitech";
            precio = 3200;
            break;
    }
    
    while(!cantidadProducto || cantidadProducto == 0){
        cantidadProducto = parseInt(prompt("Producto elegido: "+ producto + "\n Introduzca la cantidad a comprar(solo numeros)"))
    }
    
    const compra = new Pedido(producto, precio, cantidadProducto);

    return compra;
}


const pedido = pedidoProducto();


pedido.calcularSubTotal();
pedido.calcularEnvio();
pedido.calcularTotal();


alert("Su pedido:\n\n"+
"- "+ pedido.producto + " x " + pedido.cantidad + ": $" + pedido.precio * pedido.cantidad +"\n" + "- IVA 20%: $" + pedido.calcularIva() + "\n" + "- Costo de envio: $" + pedido.envio + "\n\n" + "Total: $" + pedido.total);

alert("Pedido Realizado con Exito!");