function mostrarmensaje(){
    let entrada = document.getElementById("entrada").value;
    document.getElementById("texto-salida").innerHTML =
        esPalindromo(entrada)
            ? "El texto ingresado es un palindromo."
            : "El texto ingresado no es un palindromo.";
}

function esPalindromo(entrada){
}