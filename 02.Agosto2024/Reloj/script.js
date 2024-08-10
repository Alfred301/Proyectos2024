function mostrarHoraActual() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    const horaFormateada = `${horas}:${minutos}:${segundos}`;

    document.getElementById('hora-actual').innerText = `${horaFormateada}`;
}


// Mostrar la hora actual al cargar la página
mostrarHoraActual();

// Actualizar la hora cada segundo
setInterval(mostrarHoraActual, 1000);




//SI DESEAS TENER UN BOTON EN CASO DESEES ACTUALIZAR LA HORA EN CASO SE DETENGA
//document.getElementById('actualizar-hora').addEventListener('click', mostrarHoraActual);
