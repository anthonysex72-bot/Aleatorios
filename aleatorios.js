
function generarNumeroAleatorio() {
    let numero= Math.floor(Math.random() * 100) + 1;
    return numero;
}
console.log(generarNumeroAleatorio());


function generarAleatorios() {
    let aleatorios = [];
    let cantidad;

    cantidad = recuperarInt("txtCantidad");

    if (isNaN(cantidad) || cantidad < 5 || cantidad > 20) {
        alert("Ingrese un numero entre 5 y 20");
        return;
    }

    console.log(cantidad);
}
