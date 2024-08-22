// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener la imagen del modal y el caption
var modalImg = document.getElementById("imgModal");
var captionText = document.getElementById("caption");

// Obtener todas las miniaturas
var thumbnails = document.getElementsByClassName("thumbnail");

// Asignar la función a cada miniatura para abrir el modal
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src; // Pasamos la imagen de donde dimos click
    captionText.innerHTML = this.alt; // Pasamos el alt de la imagen
    
    document.getElementById("description").style.color = "white";
  }
}


// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en <span> (x), cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de la imagen
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
