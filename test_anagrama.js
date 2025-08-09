let diccionario = [];

async function cargarDiccionario() {
  try {
    const resp = await fetch("diccionario.txt");
    const texto = await resp.text();
    diccionario = texto
      .split("\n")
      .map(p => p.trim().toLowerCase())
      .filter(Boolean);
    console.log(`Diccionario cargado con ${diccionario.length} palabras.`);
    console.log("Primeras palabras del diccionario:", diccionario.slice(0, 10));
  } catch (error) {
    console.error("Error cargando el diccionario:", error);
  }
}

// Verificar si la palabra esta en el diccionario.
function palabraValida(palabra) {
  return diccionario.includes(palabra.toLowerCase());
}

function permutaciones(palabra) {
  if (palabra.length <= 1) return [palabra];
  let resultado = [];
  for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    let resto = palabra.slice(0, i) + palabra.slice(i + 1);
    for (let perm of permutaciones(resto)) {
      resultado.push(letra + perm);
    }
  }
  return [...new Set(resultado)];
}

// Genera las combinaciones.
function combinaciones(str, minLen = 3) {
  let resultado = [];

  function backtrack(start, combo) {
    if (combo.length >= minLen) {
      resultado.push(combo);
    }
    for (let i = start; i < str.length; i++) {
      backtrack(i + 1, combo + str[i]);
    }
  }

  backtrack(0, "");
  return resultado;
}

function encontrarAnagramas(palabra) {
  let combos = combinaciones(palabra, 3);
  console.log("Combinaciones generadas:", combos);

  let anagramasSet = new Set();

  for (let combo of combos) {
    let perms = permutaciones(combo);
    console.log(`Permutaciones para combinación "${combo}":`, perms);
    for (let p of perms) {
      if (palabraValida(p) && p !== palabra.toLowerCase()) {
        anagramasSet.add(p);
      }
    }
  }

  return Array.from(anagramasSet);
}

//Funcion para buscar anagramas:
document.getElementById("btn-anagrama").addEventListener("click", () => {
  const palabra = document.getElementById("palabra").value.trim().toLowerCase();
  const salida = document.getElementById("rstAnagrama");

  if (!palabra) {
    salida.textContent = "Por favor, escribe una palabra.";
    return;
  }

  if (palabra.length < 3) {
    salida.textContent = "La palabra debe tener al menos 3 letras.";
    return;
  }

  console.log("Pruebas de palabra en diccionario:");
  console.log("¿ola está en diccionario?", palabraValida("ola"));
  console.log("¿hola está en diccionario?", palabraValida("hola"));

  const anagramas = encontrarAnagramas(palabra);

  if (anagramas.length > 0) {
    salida.textContent = `Anagramas encontrados: ${anagramas.join(", ")}`;
  } else {
    salida.textContent = "No se encontraron anagramas en el diccionario.";
  }
});

cargarDiccionario();

//En su terminas Git Bash copian:
//python -m http.server 8000
//Luego, van a su navegador y copian:
//http://localhost:8000

