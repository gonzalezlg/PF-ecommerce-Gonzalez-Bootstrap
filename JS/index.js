//Crea la clase que va a contener el contructor del array con los objetos de cada producto
class Producto {
    constructor (id, categoria, nombre, precio, stock, oferta){
        this.id=id;
        this.categoria=categoria;
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
        this.oferta=oferta;
    }
}

//Crea el array con productos
const productos = [
    new Producto (101, `niño`, `Remera`, 3500, 150, true),
    new Producto (102,`mujer`, `Botines`, 12500, 62, false),
    new Producto (103,`hombre`, `Short`, 6000, 15, true),
    new Producto (104,`mujer`, `Pantalon`, 1750, 31, false),
    new Producto (105, `niño`, `Remera`, 3500, 0, true),
    new Producto (106,`mujer`, `Botines`, 12500, 62, false),
    new Producto (107,`hombre`, `Short`, 6000, 15, true),
    new Producto (108,`mujer`, `Pantalon`, 1750, 31, false)
]


// Calcular cuotas sobre la compra sumandole interes segun la cantidad de cuotas
const calcularPagoCuotas = (a, b) =>  {
    
    switch (b) {
        case `3`: // 3 cuotas
            return a + (a*0.10) // 10% DE interes
            break;
        case `6`: // 6 cuotas
            return a + (a*0.20) // 20% DE interes
            break;
        case `12`: // 12 cuotas
            return a + (a*0.30) // 30% DE interes
            break;
    
        default: // en el caso que pague en una sola cuotas o en efectivo
            return a - (a*0.10) // 10% de descuento
            break;
    }
}

let cantCuotas = prompt(`Cuotas`);
let subTotal = parseInt(prompt(`Subtotal`));
let totalPagar = calcularPagoCuotas(subTotal, cantCuotas);
console.log(totalPagar);





// productos que estan de oferta
const productosEnOferta  = (arr) => {
    const listadoProductoOferta = arr.filter(item => item.oferta === true);
    console.log(listadoProductoOferta);
}
//productosEnOferta(productos);


//productos de niños
const productosNinos = (arr) => {
    const listadoNinos = productos.filter(item => item.categoria === `niño`);
    console.log(listadoNinos);
}
//productosNinos(productos);



// Valor total de la mercaderia en Stock
const calcularStock = (arr) => {
    let totalStock = arr.reduce((acumulador, item) => acumulador + item.stock, 0);
    console.log(`Total del stock ${totalStock} de todos los prodcuctos`);
}
//calcularStock(productos);



// Validar si hay stock
function hayStock (arr) {
    let idProducto = parseInt (prompt(`Id Producto`));
    let producto = arr.find(item => item.id === idProducto);
    if (producto !== undefined){
    if (producto.stock > 0) {
        console.log(`Hay Stock`);
    } else {
        console.log(`No Hay Stock`);
    }
    } else {
    console.log(`Producto inexistente`);
    }
}
//hayStock(productos);
