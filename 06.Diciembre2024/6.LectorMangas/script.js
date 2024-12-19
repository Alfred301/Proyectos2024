
//Solo sirve para el checkbox de la barra en el header
const checkbox = document.getElementById('open-menu');

    function handleResize() {
      if (window.innerWidth > 991) {
        checkbox.checked = true;
      }
}
window.addEventListener('resize', handleResize);
handleResize();