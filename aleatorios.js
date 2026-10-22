
function generarNumeroAleatorio() {
    let numero= Math.floor(Math.random() * 100) + 1;
    return numero;
}



function generarAleatorios() {
    let aleatorios = [];
    let cantidad;

    cantidad = recuperarInt("txtCantidad");

    if (isNaN(cantidad) || cantidad < 5 || cantidad > 20) {
        alert("Ingrese un numero entre 5 y 20");
        return;
    }

   for (let i = 0; i < cantidad; i++) {
    console.log(i);

    let numero = generarNumeroAleatorio();
    aleatorios.push(numero);
    
    }
    console.log(aleatorios);
    mostrarResultados(aleatorios);
}


function mostrarResultados(arregloNumeros) {
    let tabla = "<table border='1'>";
    tabla += "<tr><th>Números aleatorios</th></tr>";

    for (let i = 0; i < arregloNumeros.length; i++) {
        tabla += "<tr><td>" + arregloNumeros[i] + "</td></tr>";
    }

    tabla += "</table>";

    document.getElementById("divResultado").innerHTML = tabla;
}
