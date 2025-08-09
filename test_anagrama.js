let palabra = document.getElementById("palabra").value.trim().toLowerCase(); 

function permutaciones(str){
    if(str.length <= 1)return [str];
    let resultado = [];
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        let resto = str.slice(0, i) + str.slice(i + 1);
        for (let subPerm of permutaciones(resto)){
            resultado.push(char + subPerm);
        }
    }
    return [...new Set(resultado)];
}

//Api(Datamuse):
let res = await fetch(`https://api.datamuse.com/words?sp=${palabra}&max=1`);
let data = await res.json();


//Funcion para encontrar solo palabras del diccionario:
async function palabraValida(palabra){
    return data.length > 0 && data[0].word.toLowerCase() === palabra.toLowerCase();
}

//funcion Formulario:
document.getElementById("btn anagrama").addEventListener("submit", async function (e) {
    e.preventDefault(); //Evita recargar la pagina
     
    if(palabra.length < 3){
        document.getElementById(("rstAnagrama").textContent = "La palabra debe tener al menos 3 letras");
        return;
    }

    //Mensaje de espera:
    document.getElementById("rstAnagrama").textContent = "Generando...";

    let posibles = permutaciones(palabra);

    //Filtro:
    posibles = posibles.filter(p => p.length >= 3);

    let validas = [];

    //Verificamos las combinaciones y agregamos al array:
    await Promise.all(posibles.map(async p =>{
        if(await palabraValida(p)){
            validas.push(p);
        }
    }));

    //Mostrar resultado:    
    if(validas.length > 0){
        document.getElementById("rstAnagrama").textContent = "Palabras Validas " + validas.join(", ");
    }
    else{
        document.getElementById("rstAnagrama").textContent = "No se encontraron palabras...";
    }

});




