document.getElementById("header__nav--SobreMi", "header__nav--Proyectos", "header__nav--Contacto").addEventListener("click", function(event){
    document.getElementById("open-menu").checked = false;
 });

let inputs = document.getElementsByClassName("contact__input");

for (let i = 0; i < inputs.length; i++) {

   inputs[i].addEventListener("focus", function(event) {
        this.style.background = "black";
        this.style.color = "white";
    });

    inputs[i].addEventListener("blur", function(event) {
        if (this.value === "") {
            this.style.background = "white";
            this.style.color = "black";
        }
    });
}


    