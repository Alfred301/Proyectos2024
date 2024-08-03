
// Inicializamos variables en vacio 
document.getElementById('mostrar').textContent = "";
var parte1="";
var parte2="";
var signo="";
var guardado ="";

// Pasamos el valor de los signos
function pasarSignos(contenido){
    if(parte1 && !parte2){
        signo = contenido;
        document.getElementById('mostrar').textContent = signo;
        guardado="";
    }else{
        alert("Ingresa primero numeros o dale click a calcular");
    }
}

// Declaramos array de todos los botones
const numeros = document.querySelectorAll('.btn-num');

// Recorremos lista de botones
numeros.forEach(num => {
    num.addEventListener('click', () =>{
        
        //Vaciamos la caja del resultado y ponemos su color inicial
        document.getElementById('label-result').textContent = "";
        document.getElementById('label-result').style.background = "rgb(225, 210, 220)";

        // Ingresamos valor solicitado, en caja muestra, numeros de 1 al 9
        if(num.textContent == "0"){
            guardado = guardado+num.textContent; //Concatemanos uno por uno
        }else if(num.textContent == "1"){
            guardado = guardado+num.textContent; //--
        }else if(num.textContent == "2"){
            guardado = guardado+num.textContent; //--
        }else if(num.textContent == "3"){
            guardado = guardado+num.textContent; //--
        }else if(num.textContent == "4"){
            guardado = guardado+num.textContent; //--
        }else if(num.textContent == "5"){
            guardado = guardado+num.textContent; //--
        }else if(num.textContent == "6"){
            guardado = guardado+num.textContent; //--
        }else if(num.textContent == "7"){
            guardado = guardado+num.textContent; //--
        }else if(num.textContent == "8"){
            guardado = guardado+num.textContent; //--
        }else if(num.textContent == "9"){
            guardado = guardado+num.textContent; //--
        }

        document.getElementById('mostrar').textContent = guardado; //Mostramos lo que elije

        //Comparamos el signo, ya que si esta presente, debera empezar a guardar en la parte 2
        if(!signo){
            parte1 = guardado;
        }else{
            parte2 = guardado;
        }

        // Ingresamos valor solicitado, en caja muestra, signos - + * /
        if(num.textContent == "-"){
            pasarSignos(num.textContent);
        }else if(num.textContent == "+"){
            pasarSignos(num.textContent);
        }else if(num.textContent == "*"){
            pasarSignos(num.textContent);
        }else if(num.textContent == "/"){
            pasarSignos(num.textContent);
        }
    });
});

// Boton para hacer el calculo
    document.getElementById('btn-calcular').addEventListener('click', function(event){
        
        // Validamos de que no ingrese en caso existan campos vacios
        if(parte1!=="" && parte2!=="" && signo!==""){

            // Ponemos un color al ingresar
            document.getElementById('label-result').style.background = "rgb(246, 202, 230)";

            // Vaciamos la muestra y el guardado para que este listo a otra operacion
            document.getElementById('mostrar').textContent = "";
            guardado="";

            // Movemos lo mas importante
            let num1 = parseInt(parte1);
            let num2 = parseInt(parte2);
            let result=0;

            // Hacemos las operaciones
            if(signo==="-"){
                result = num1-num2;
                document.getElementById('label-result').textContent = num1+" - "+num2+" = "+result;
            }else if(signo==="+"){
                result = num1+num2;
                document.getElementById('label-result').textContent = num1+" + "+num2+" = "+result;
            }else if(signo==="*"){
                result = num1*num2;
                document.getElementById('label-result').textContent = num1+" x "+num2+" = "+result;
            }else if(signo==="/"){
                result = num1/num2;
                document.getElementById('label-result').textContent = num1+" / "+num2+" = "+result.toPrecision(3);
            }
    
            // Vaciamos parte1, parte2 y signo, para estar listo a la siguiente operacion
            parte1="";
            parte2="";
            signo=""; 

        }else{
            alert("Faltan agregar datos");
        }
            
    });

// Boton para vaciar todo
    document.getElementById('btn-borrar').addEventListener('click', function(event){
        document.getElementById('mostrar').textContent = ""; 
        parte1="";
        parte2="";
        signo="";
        document.getElementById('label-result').textContent="";
        guardado="";
        document.getElementById('label-result').style.background = "rgb(225, 210, 220)";

    });



