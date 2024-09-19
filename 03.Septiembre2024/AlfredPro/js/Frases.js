 // Lista de canciones
 const songs = [
    '../media/music/(FREE) ISAIAH RASHAD x AARON MAY TYPE BEAT OCEAN VIEWS  CHILL RAP TYPE BEAT.mp3',
    '../media/music/(FREE) Lofi Type Beat - Feelings.mp3',
    '../media/music/[FREE] R&B Type Beat  Fallin Star  Chill Love Beat Instrumental.mp3',
    '../media/music/🔥UN CIGARRO - Base De Rap Lofi Instrumental Uso Libre Boom Bap Chill Beat.mp3',
    '../media/music/Good Times Base De Rap RnB Chill  Boom Bap Type Beat.mp3',
    '../media/music/Lee - Full Album Lofi Type Beat.mp3',
    '../media/music/RELAX Base De Rap RnB Chill Boom Bap Type Beat.mp3'
];

//ID de la cancion
let currentSongIndex = 0;

//Llamamos la variable del audio
const audioPlayer = document.getElementById('audioPlayer');

// Iniciar la música
function playMusic() {
    audioPlayer.play();
}

// Pausar la música
function pauseMusic() {
    audioPlayer.pause();
}

// Cambiar a la siguiente canción
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Bucle para reiniciar la lista de canciones
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
}

// Cargar la primera canción automáticamente al iniciar la página
window.onload = function() {
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
}

// Mostrarmos la frase
function newPhrase(){
    fetch('../media/txt/frases.txt') // Ruta del archivo con las frases
    .then(response => response.text())
    .then(data => {
        // Separamos cada frase detectando esto |
        let frases = data.split('|');

        // Evitamos partes vacias
        frases = frases.filter(frase => frase.trim() !== '');

        // Seleccionamos una frase aleatoria
        let fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

        // Mostramos la frase
        document.getElementById('fraseAleatoria').innerText = fraseAleatoria.trim();
    })
    .catch(error => console.log('Error al cargar el archivo:', error));
}