
//Llamamos al DOMContentLoaded para que sea lo primero que se inicialize 
document.addEventListener('DOMContentLoaded', () => {
    //Cargamos las imagenes

    

    const images = ['./cartas/img1.png','./cartas/img2.png','./cartas/img3.png','./cartas/img4.png','./cartas/img5.png','./cartas/img6.png','./cartas/img7.png','./cartas/img8.png','./cartas/img9.png','./cartas/img10.png'];

    //Contador de cartass
    const totalCards = document.querySelectorAll('.card').length;
    
    //Mezclamos las cartas, con ...images lo duplicamos en 2, el sort y math mezcla al azar todas las imagenes y slice agarra todas las imagenes que entren en el totalCards 
    const cardImages = [...images, ...images].sort(() => 0.5 - Math.random()).slice(0, totalCards);

    const cards = document.querySelectorAll('.card'); //Para leer las cartas
    let flippedCards = []; //Para guardar temporalmente las cartas volteadas
    let score = 0; //La puntuacion
    const scoreDisplay = document.getElementById('score'); // Para poder escribir la puntuacion en el div


    //Recorremos laas cartas hata completar una por una
    cards.forEach((card, index) => {
        const cardA = card.querySelector('.cardA');
        const cardB = card.querySelector('.cardB');
        const img = document.createElement('img');
        img.src = cardImages[index]; //Mandamos uno por uno las cartas a las imagenes
        cardB.appendChild(img); //Lo agregamos a cada ladoB de cada carta

        //Evento cuando hagamos click a una carta
        card.addEventListener('click', () => {

            //IMPORTANTE: solo entrara si el flippedCards esta con 0 o 1 elemento  
            // y tambien si aun no se le asignando una clase "flipped" 
            if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
                card.classList.add('flipped'); //Aqui le agrega la clase flipped el cual en css tiene para que se pueda voltear
                card.classList.add('visility');
                flippedCards.push(card); //Agregamos la imagen al temporal


                //Cuando flippedCard tiene exactamente 2 cartas comparamos
                if (flippedCards.length === 2) {
                    checkForMatch();
                }
            }
        });
    });

    function checkForMatch() {
        const [card1, card2] = flippedCards; //El contenido de flippedCards lo separamos en 2 variables

        //Lo asignamos por separa, el nombre la imagen
        const img1 = card1.querySelector('img').src;
        const img2 = card2.querySelector('img').src;

        //Si son iguales entran aqui
        if (img1 === img2) {

            //Hacemos un retraso en carga
            setTimeout(() => {
                
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                
                card1.classList.add('hidden');
                card2.classList.add('hidden');

                card1.classList.remove('visility');
                card2.classList.remove('visility');
                
                flippedCards = [];  //Vaciamos los temporales
                score++;
                updateScore(); //Actulizamos y nos vamos
            }, 1000);
        } else {

            //Caso contrario que sean cartas diferentes
            setTimeout(() => {
                //Empezamos de cero y borramos la clase
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                flippedCards = []; //Vaciamos los temporales
            }, 1000);
        }
    }

    //Actualiza el score
    function updateScore() {
        scoreDisplay.textContent = `Score: ${score}`;
    }
});
