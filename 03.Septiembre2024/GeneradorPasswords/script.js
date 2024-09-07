
//EJEMPLO"
// https://www.avast.com/es-ww/random-password-generator#pc

let letrasMinu = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y', 'z'
];

let letrasMayu = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
    'U', 'V', 'W', 'X', 'Y', 'Z'
];
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let simbolos = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', 
    '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', 
    "'", '"', '\\', '|', ',', '.', '<', '>', '/', '?', 
    '`', '~'
];

let rango = 10;
let incluirNumeros = true;
let incluirLetrasMinu = true;
let incluirLetrasMayu = true;
let incluirSimbolos = true;



let resultado="";
let generador=[];

for(let i=0; i<rango; i++){

    if(incluirNumeros){
        let numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
        generador = generador.concat(numeroAleatorio);
    }

    if(incluirLetrasMinu){
        let letraMinuAleatoria = letrasMinu[Math.floor(Math.random() * letrasMinu.length)];
        generador = generador.concat(letraMinuAleatoria);
    }

    if(incluirLetrasMayu){
        let letraMayuAleatoria = letrasMayu[Math.floor(Math.random() * letrasMayu.length)];
        generador = generador.concat(letraMayuAleatoria);
    }

    if(incluirSimbolos){
        let simbolosAleatorios = simbolos[Math.floor(Math.random() * simbolos.length)];
        generador = generador.concat(simbolosAleatorios);
    }

    //console.log(generador); // Ver resultados solo dejalo hasta que acabes
    


    let valor = Math.floor(Math.random() * generador.length);
    resultado = resultado + generador[valor];

    generador = [];
};

console.log(resultado);


