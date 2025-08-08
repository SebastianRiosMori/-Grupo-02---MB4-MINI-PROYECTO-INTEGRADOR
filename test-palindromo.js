function mostrarmensaje(){
    let entrada = document.getElementById("entrada").value;
    document.getElementById("texto-salida").innerHTML =
        esPalindromo(entrada)
            ? "El texto ingresado es un palindromo."
            : "El texto ingresado no es un palindromo.";
}

function esPalindromo(entrada){
    let limpiarCadena = entrada.replace(/[^a-zA-Z0-9]/g,"")
    let cadenaMinuscula = limpiarCadena.toLowerCase();
    let arregloMinuscula = cadenaMinuscula.split("");
    let minusculasRevertida = arregloMinuscula.reverse();
    let cadenaMinusculaRevertida = minusculasRevertida.join("");
    return cadenaMinusculaRevertida == cadenaMinuscula ? true : false;
}