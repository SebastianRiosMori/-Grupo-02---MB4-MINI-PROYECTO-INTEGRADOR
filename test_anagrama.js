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
    return [...new set(resultado)];
}
//Api(Datamuse):

let res = await fetch(`https://api.datamuse.com/words?sp=${palabra}&max=1`);
let data = await res.json();


//Funcion para encontrar solo palabras del diccionario:
async function palabraValida(palabra){
    return data.length > 0 && data[0].word.toLowerCase() === palabra.toLowerCase();
}

//Formulario:




