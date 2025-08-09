# -Grupo-02---MB4-MINI-PROYECTO-INTEGRADOR
🎯 Mini Proyecto #3 - Grupo 02
---
📦 Proyecto: Verificador de palabras 

🎯 Objetivo General - Grupo 02
---
Aplicar SCRUM + XP y  GitHubActions para implementar la integración continuaal  desarrollo web colaborativo para entregar un programa funcional , trabajando en equipo en un Sprint de 2 días

## 📌 TABLERO DEL TRELLO  
Sigan o miren nuestro tablero del trello:

### 🔗 [Tablero de Grupo 2 - Lista de Compras](https://trello.com/b/dIZ5Qcsl/grupo-02-verificador-de-palabras)

---

## 🧾 ¿Cómo pueden ejecutar nuestro proyecto?

1. Clonamos el repositorio poniendo:
   ```bash
   git clone https://github.com/SebastianRiosMori/-Grupo-02---MB4-MINI-PROYECTO-INTEGRADOR.git
2. Abrimos el link y el index en nuestro navegador(ya sea el de nuestra preferencia)
3. Y listo, ya podemos visualizarlo

🛜DEPENDENCIAS
---
### 1️⃣ Instalar Python
1. Descarga Python desde la página oficial: [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/)
2. Instala la versión más reciente (se recomienda Python 3.x).
### 2️⃣ Instala Python
1. Ejectuamos el isntalador instalado
2. MUY IMPORTANTE **marca la casilla**:  `Add Python 3.x to PATH` antes de hacer clic en "Install Now".
   Esto añade Python a las variables de entorno para que puedas usarlo desde la terminal
### 3️⃣ Ejecuta lo siguiente con git
1. `python -m htpp.server8000`
2. Esto iniciará un servidor HTTP simple en el puerto **8000**.
3. Luego abre en tu navegador: [http://localhost:8000](http://localhost:8000)
---
👥Integrantes y perfiles
---
| Rol                                  | Nombre             | GitHub                                                     |
| ------------------------------------ | ------------------ | ---------------------------------------------------------- |
| 🧠 Scrum Master                      | Víctor Quispe Curo | [@Victor-master1](https://github.com/Victor-master1)       |
| 📝 Propietario del producto          | Leonel Contreras   | [@ct-Leon](https://github.com/ct-Leon)   |
| 👨‍💻 Equipo de desarrollo (DEV GIT) | Sebastián Ríos     | [@SebastianRiosMori](https://github.com/SebastianRiosMori) |
| 💻 Equipo de desarrollo (JS)         | Guillermo Alejo    | [@william-0519](https://github.com/william-0519)           |
| 🧑‍💻 Equipo de desarrollo (DS)      | Elías Amaya        | [@Elias66-AP](https://github.com/Elias66-AP)               |
| 🎨 Equipo de desarrollo (CSS y HTML) | Roxana Matamoros   | [@rox916](https://github.com/rox916)                       |

---

# 🚀 Sprint Goal
Entregar una versión funcional que verifique palíndromos y anagramas simples, con interfaz web básica, validación de entrada y tests automáticos corriendo con GitHub Actions.

---

💡Historia de Usuarios 
--
🍀HU1 - Verificar si una palabra es un palíndromo

**Descripción:**

Como usuario quiero ingresar una palabra y saber si es un palíndromo para poder confirmar su simetría.

**Criterios de Aceptación:**

1.-La verificación ignora mayúsculas.

2.-La verificación ignora espacios.

3.-La respuesta muestra un mensaje claro:

"Es un palíndromo"

"No es un palíndromo"

4.-Se manejan entradas vacías o inválidas mostrando un mensaje de advertencia.

---

🍀HU2 - Verificar si una palabra es un anagrama

**Descripción:**

Como usuario quiero ingresar dos palabras y saber si son anagramas entre sí para identificar similitud entre ellas.

**Criterios de Aceptación:**

1.-La verificación ignora mayúsculas y espacios.

2.-La respuesta es clara y precisa:

3.-"Es un anagrama"

4.-"No es un anagrama"

5.-Se soportan palabras con acentos y signos.

---

🍀HU3 - Mostrar resultados con formato claro

**Descripción:**

Como usuario quiero que el resultado de la verificación tenga un diseño claro para que sea fácil de leer.

**Criterios de aceptación:**

1.-El resultado se muestra debajo del formulario inmediatamente después de la verificación.

2.-El mensaje de resultado utiliza color para diferenciar entre positivo (ej. verde) y negativo (ej. rojo).

3.-El texto del resultado es fácil de copiar para usarlo en otro lugar.

4.-El diseño se adapta correctamente a distintos tamaños de pantalla (responsivo).

---

🍀HU4 – Diseño amigable y responsive

**Descripción:**

Como usuario, quiero que la interfaz sea clara, intuitiva y funcional en distintos dispositivos, para poder usar la lista cómodamente desde mi celular o laptop.

**Criterios de aceptación:**

1.-La interfaz debe adaptarse automáticamente a móviles, tabletas y escritorio.

2.-Los botones e inputs deben estar alineados y centrados en la pantalla.

3.-Los elementos (texto, botones, listas) deben ser legibles, con tamaños y colores que faciliten la lectura.

4.-No debe ser necesario hacer zoom o desplazarse horizontalmente para interactuar con la aplicación.

5.-El diseño debe mantener una estética simple y coherente en todos los dispositivos.

---
