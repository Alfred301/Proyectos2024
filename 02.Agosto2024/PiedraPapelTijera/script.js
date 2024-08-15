
let compu = ['Piedra', 'Papel', 'Tijera'];
let imagenes = ['./img/piedra.png', './img/papel.png', './img/tijeras.png'];

let puntaje = 0;
let puntajePC = 0;

function calcular(){
    let numero = Math.floor(Math.random() * 3);
    return numero;
};

function mostrar(){
    console.log(puntaje);
    console.log(puntajePC);

    document.getElementById('puntaje-humano').textContent = puntaje;
    document.getElementById('puntaje-pc').textContent = puntajePC;


    
    if(puntaje==5){
        setTimeout(function() {
        document.getElementById('contenido').style.display = "none";

        document.getElementById('emergente').style.display = "flex";
        document.getElementById('emergente').style.background = "rgb(83, 114, 65)";
        document.getElementById('emergente__title').textContent = "Ganaste";
        document.getElementById('emergente__boton').style.background = "rgb(83, 114, 65)";
        
        puntaje = 0;
        puntajePC = 0;
        }, 500);
    }
    
    if(puntajePC==5){
        setTimeout(function() {
        document.getElementById('contenido').style.display = "none";

        document.getElementById('emergente').style.display = "flex";
        document.getElementById('emergente').style.background = "rgb(187, 70, 80)";
        document.getElementById('emergente__title').textContent = "Gana la PC";
        document.getElementById('emergente__boton').style.background = "rgb(187, 70, 80)";
        

        puntaje = 0;
        puntajePC = 0;
        }, 500);
    }
}

document.getElementById('emergente__boton').addEventListener("click", function(event){
    
    document.getElementById('emergente').style.display = "none";
    limpiar();
    document.getElementById('contenido').style.display = "initial";
});


document.getElementById('id-piedra').addEventListener("click", function(event){

    document.getElementById("tu").textContent="";
    document.getElementById("compu").textContent="";

    const contenedor = document.getElementById("tu");
    const imgElement = document.createElement('img');
    imgElement.src = imagenes[0];
    imgElement.className = 'imgElementos';
    contenedor.appendChild(imgElement);

    let valor = calcular();

    const contenedor2 = document.getElementById("compu");
    const imgElement2 = document.createElement('img');
    imgElement2.src = imagenes[valor];
    imgElement2.className = 'imgElementos';
    contenedor2.appendChild(imgElement2);

    if(compu[valor] == "Piedra"){
        document.getElementById('result').textContent = "Empate";
        document.getElementById('result').style.color = "white";
    }else if(compu[valor] == "Papel"){
        document.getElementById('result').textContent = "Punto para PC";
        document.getElementById('result').style.color = "red";
        puntajePC++;
    }else if(compu[valor] == "Tijera"){
        document.getElementById('result').textContent = "Punto para ti";
        document.getElementById('result').style.color = "green";
        puntaje++;
    }

    mostrar();


});



document.getElementById('id-papel').addEventListener("click", function(event){

    document.getElementById("tu").textContent="";
    document.getElementById("compu").textContent="";

    const contenedor = document.getElementById("tu");
    const imgElement = document.createElement('img');
    imgElement.src = imagenes[1];
    imgElement.className = 'imgElementos';
    contenedor.appendChild(imgElement);

    let valor = calcular();

    const contenedor2 = document.getElementById("compu");
    const imgElement2 = document.createElement('img');
    imgElement2.src = imagenes[valor];
    imgElement2.className = 'imgElementos';
    contenedor2.appendChild(imgElement2);

    if(compu[valor] == "Piedra"){
        document.getElementById('result').textContent = "Punto para ti";
        document.getElementById('result').style.color = "green";
        puntaje++;
    }else if(compu[valor] == "Papel"){
        document.getElementById('result').textContent = "Empate";
        document.getElementById('result').style.color = "white";
    }else if(compu[valor] == "Tijera"){
        document.getElementById('result').textContent = "Punto para PC";
        document.getElementById('result').style.color = "red";
        puntajePC++;
    }

    mostrar();


});


document.getElementById('id-tijera').addEventListener("click", function(event){

    document.getElementById("tu").textContent="";
    document.getElementById("compu").textContent="";

    const contenedor = document.getElementById("tu");
    const imgElement = document.createElement('img');
    imgElement.src = imagenes[2];
    imgElement.className = 'imgElementos';
    contenedor.appendChild(imgElement);

    let valor = calcular();

    const contenedor2 = document.getElementById("compu");
    const imgElement2 = document.createElement('img');
    imgElement2.src = imagenes[valor];
    imgElement2.className = 'imgElementos';
    contenedor2.appendChild(imgElement2);

    if(compu[valor] == "Piedra"){
        document.getElementById('result').textContent = "Punto para PC";
        document.getElementById('result').style.color = "red";
        puntajePC++;
    }else if(compu[valor] == "Papel"){
        document.getElementById('result').textContent = "Punto para ti";
        document.getElementById('result').style.color = "green";
        puntaje++;
    }else if(compu[valor] == "Tijera"){
        document.getElementById('result').textContent = "Empate";
        document.getElementById('result').style.color = "white";
    }
    mostrar();
});


document.getElementById('resetear').addEventListener('click', function(event){
    limpiar();
});


function limpiar(){
    document.getElementById("tu").textContent="";
    document.getElementById("compu").textContent="";
    document.getElementById('result').textContent = "";
    document.getElementById('result').style.background = "black";
    puntaje = 0;
    puntajePC = 0;
    document.getElementById('puntaje-humano').textContent = "";
    document.getElementById('puntaje-pc').textContent = "";
};