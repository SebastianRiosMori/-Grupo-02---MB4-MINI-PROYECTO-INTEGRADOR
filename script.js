function mostrarmensaje() {
  let entrada = document.getElementById("entrada").value.trim(); // quita espacios al inicio y fin
  let salida = document.getElementById("texto-salida");

  if (entrada === "") {
    salida.innerHTML = "Esperando verificación...";
    salida.style.color = "white"; // color neutro
    return;
  }

  if (esPalindromo(entrada)) {
    salida.innerHTML = "✅ El texto ingresado es un palíndromo.";
    salida.style.color = "green";
  } else {
    salida.innerHTML = "❌ El texto ingresado no es un palíndromo.";
    salida.style.color = "red";
  }
}

function esPalindromo(entrada) {
  let limpiarCadena = entrada.replace(/[^a-zA-Z0-9]/g, "");
  let cadenaMinuscula = limpiarCadena.toLowerCase();
  let cadenaMinusculaRevertida = cadenaMinuscula.split("").reverse().join("");
  return cadenaMinusculaRevertida === cadenaMinuscula;
}

let diccionario = [];

// Cargar diccionario desde archivo local
async function cargarDiccionario() {
  try {
    const resp = await fetch("diccionario.txt");
    const texto = await resp.text();
    diccionario = texto
      .split("\n")
      .map(p => p.trim().toLowerCase())
      .filter(Boolean);
    console.log("Diccionario cargado:", diccionario.length, "palabras");
  } catch (error) {
    console.error("Error cargando el diccionario:", error);
  }
}

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

// Evento para buscar anagramas
function formatearAnagramasHTML(anagramas, palabrasPorFila = 4) {
  let filas = [];
  for (let i = 0; i < anagramas.length; i += palabrasPorFila) {
    let grupo = anagramas.slice(i, i + palabrasPorFila);
    filas.push(grupo.join(", "));
  }
  return filas.join("<br>");
}

document.getElementById("btn-anagrama").addEventListener("click", () => {
  const palabra = document.getElementById("entrada").value.trim().toLowerCase();
  const salida = document.getElementById("salida");

  if (!palabra) {
    salida.textContent = "Por favor, escribe una palabra.";
    salida.style.color = "skyblue";
    return;
  }

  if (palabra.length < 3) {
    salida.textContent = "La palabra debe tener al menos 3 letras.";
    salida.style.color = "skyblue";
    return;
  }

  // Validar que solo contenga letras (sin espacios ni números)
  if (!/^[a-zA-Z]+$/.test(palabra)) {
    salida.textContent = "Entrada inválida: solo se permiten palabras sin espacios ni números.";
    salida.style.color = "skyblue";
    return;
  }

  const anagramas = encontrarAnagramas(palabra);

  if (anagramas.length > 0) {
    const textoFormateado = formatearAnagramasHTML(anagramas, 4);
    salida.innerHTML = `Anagramas encontrados:<br>${textoFormateado}`;
    salida.style.color = "white";
  } else {
    salida.textContent = "No se encontraron anagramas en el diccionario.";
    salida.style.color = "skyblue";
  }
});

// Carga el diccionario al iniciar la página
window.onload = async () => {
  await cargarDiccionario();
};
