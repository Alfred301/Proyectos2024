
function generateWord() {

    document.getElementById("wordDisplay").style.border = "1px solid white";

    fetch('https://clientes.api.greenborn.com.ar/public-random-word')
        .then(response => response.json())  // Parseamos la respuesta como JSON
        .then(data => {
            console.log('Respuesta recibida:', data);  // Mostramos la respuesta completa en la consola

            const word = data[0];
            document.getElementById('wordDisplay').textContent = word;
        })
        .catch(error => {
            console.error('Error al obtener la palabra:', error);
            document.getElementById('wordDisplay').textContent = "Error al obtener la palabra";
        });
}

