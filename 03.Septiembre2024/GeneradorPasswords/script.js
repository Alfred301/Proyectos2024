
//Creamos arrays con el contenido de las letras, numeros y simbolos
let letrasMinu = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let letrasMayu = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let simbolos = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  "'",
  '"',
  "\\",
  "|",
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
  "`",
  "~",
];

// Limpiamos las opciones de letras, numeros y simbolos
function limpiar(){
  document.getElementById("content__minuscula").checked = false;
  document.getElementById("content__mayuscula").checked = false;
  document.getElementById("content__numero").checked = false;
  document.getElementById("content__simbolo").checked = false;
}

// Habilitamos solo Boton Facil y marcamos las opciones que le pertenecen
function checkFacil(){

  limpiar();
  document.getElementById("checkedMedio").checked = false;
  document.getElementById("checkedDificil").checked = false;

  let valor = document.getElementById("checkedFacil");

  if(valor.checked){
    document.getElementById("content__minuscula").checked = true;
    document.getElementById("content__mayuscula").checked = true;
  }else{
    
    document.getElementById("content__minuscula").checked = false;
    document.getElementById("content__mayuscula").checked = false;
  }
}

// Habilitamos solo Boton Medio y marcamos las opciones que le pertenecen
function checkMedio(){

  limpiar();
  document.getElementById("checkedFacil").checked = false;
  document.getElementById("checkedDificil").checked = false;

  let valor = document.getElementById("checkedMedio");

  if(valor.checked){
    document.getElementById("content__minuscula").checked = true;
    document.getElementById("content__mayuscula").checked = true;
    document.getElementById("content__numero").checked = true;
  }else{
    
    document.getElementById("content__minuscula").checked = false;
    document.getElementById("content__mayuscula").checked = false;
    document.getElementById("content__numero").checked = false;
  }
}


// Habilitamos solo Boton Dificil y marcamos las opciones que le pertenecen
function checkDificil(){

  limpiar();
  document.getElementById("checkedFacil").checked = false;
  document.getElementById("checkedMedio").checked = false;

  let valor = document.getElementById("checkedDificil");

  if(valor.checked){
    document.getElementById("content__minuscula").checked = true;
    document.getElementById("content__mayuscula").checked = true;
    document.getElementById("content__numero").checked = true;
    document.getElementById("content__simbolo").checked = true;
  }else{
    
    document.getElementById("content__minuscula").checked = false;
    document.getElementById("content__mayuscula").checked = false;
    document.getElementById("content__numero").checked = false;
    document.getElementById("content__simbolo").checked = false;
  }
}

// Boton GENERAR
document.getElementById("content__generar").addEventListener("click", function (event) {
   
  // Validamos si esta vacio los check
  if(document.getElementById("checkedFacil").checked !== false ||
  document.getElementById("checkedMedio").checked !== false || 
  document.getElementById("checkedDificil").checked !== false){
      
    // Validamos si esta con contenido la cantidad
    if(document.getElementById("content__cantidad").textContent){

      // Accedemos a sus variables
      let rango = parseInt(document.getElementById("content__cantidad").textContent);
      let incluirNumeros = document.getElementById("content__numero").checked;
      let incluirLetrasMinu = document.getElementById("content__minuscula").checked;
      let incluirLetrasMayu = document.getElementById("content__mayuscula").checked;
      let incluirSimbolos = document.getElementById("content__simbolo").checked;
    
      let resultado = "";
      let generador = []; //Aqui guardaremos todos los resultados aleatorios de cada array
    
      //Entramos a un bucle dependiendo el rango pedido por el usuario
      for (let i = 0; i < rango; i++) {
        if (incluirNumeros) {
          let numeroAleatorio =
            numeros[Math.floor(Math.random() * numeros.length)];
          generador = generador.concat(numeroAleatorio);
        }
    
        if (incluirLetrasMinu) {
          let letraMinuAleatoria =
            letrasMinu[Math.floor(Math.random() * letrasMinu.length)];
          generador = generador.concat(letraMinuAleatoria);
        }
    
        if (incluirLetrasMayu) {
          let letraMayuAleatoria =
            letrasMayu[Math.floor(Math.random() * letrasMayu.length)];
          generador = generador.concat(letraMayuAleatoria);
        }
    
        if (incluirSimbolos) {
          let simbolosAleatorios =
            simbolos[Math.floor(Math.random() * simbolos.length)];
          generador = generador.concat(simbolosAleatorios);
        }
    
        let valor = Math.floor(Math.random() * generador.length);
        resultado = resultado + generador[valor];
    
        generador = [];
      }
    
      document.getElementById('content__rpta').textContent = resultado;
    }else{
      alert("Campos Numerico Vacio")
    }
    
  }else{
    alert("Debes escoger una opcion");
    document.getElementById("content__rpta").textContent = "";
    document.getElementById("rangeInput").value = "8";
    document.getElementById("content__cantidad").textContent = "8";
  }

  });



  // Funcio para el boton de copiar texto
  function copyToClipboard() {

    if(document.getElementById("content__rpta").textContent){
      // Aquí defines la variable que contiene el texto que quieres copiar
      let text = document.getElementById("content__rpta").innerText;

      // Creas un elemento de entrada temporal en el DOM
      let tempInput = document.createElement("input");
      tempInput.value = text;

      // Lo añades al cuerpo del documento y seleccionas su contenido
      document.body.appendChild(tempInput);
      tempInput.select();
      tempInput.setSelectionRange(0, 99999);  // Para móviles

      // Copias el contenido al portapapeles
      document.execCommand("copy");

      // Remueves el elemento temporal
      document.body.removeChild(tempInput);

      // Mensaje
      alert("¡Texto copiado al portapapeles con exito!");

    }else{
      alert("No hay nada que copiar");
    }

}

// Sirve para cambiar los digitos cuando movemos la barra de numeros
function updateNumber() {
  // Obtiene el valor del slider
  let sliderValue = document.getElementById("rangeInput").value;

  // Actualiza el valor mostrado en pantalla
  document.getElementById("content__cantidad").textContent = sliderValue;
}


