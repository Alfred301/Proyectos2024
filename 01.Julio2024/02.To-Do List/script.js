document.getElementById('formulario').addEventListener('submit', function(event){
    
    event.preventDefault();

    let evento = document.getElementById('tarea');
    let aux = evento.value.trim();

    if(aux){
        let ul = document.getElementById('listaTareas');
        let li = document.createElement('li');

        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';

        let span = document.createElement('span');
        span.textContent = aux;
        span.classList.add('spanContenido');

        let buttonDelete = document.createElement('button');
        buttonDelete.classList.add('btn', 'btn-eliminar');

        let buttonEdit = document.createElement('button');
        buttonEdit.classList.add('btn', 'btn-editar');

        
        buttonDelete.addEventListener('click', function(){
            ul.removeChild(li);
        });

        buttonEdit.addEventListener('click', function(){
            let auxButton = prompt("Edita tu tarea: ", span.textContent);
            if(auxButton !== null && auxButton.trim() !== ""){
                span.textContent=auxButton.trim();
            }

        });

        checkBox.addEventListener('click', function(event){
            if(checkBox.checked){
                span.style.color = "grey";
                span.style.textDecoration = "line-through";        
            }else{
                span.style.color = "black";
                span.style.textDecoration = "none";
            }
        
        });

        if(document.querySelector('.content').style.background === "black"){
            span.style.color = "white";
        }

            
        li.appendChild(checkBox);
        li.appendChild(span);
        li.appendChild(buttonDelete);
        li.appendChild(buttonEdit);

        ul.appendChild(li);

        
        
        evento.value = "";
    }

});



document.getElementById('tarea').addEventListener('focus', function(event){
    
    document.querySelector('.content').style.background = "black";

    let ul = document.getElementById('listaTareas');
    let lista = ul.getElementsByTagName('li');
    let spa = ul.getElementsByTagName('span');

    let checkboxes = ul.getElementsByTagName('input');

    
    for (let i = 0; i < spa.length; i++) {

        if(checkboxes[i].checked){  
            
            spa[i].style.color = "gray";

        }else{
            
            spa[i].style.color = "white";
        }
    }
    
});



document.getElementById('tarea').addEventListener('blur', function(event){
    document.querySelector('.content').style.background = "white";

    let ul = document.getElementById('listaTareas');
    let lista = ul.getElementsByTagName('li');
    let spa = ul.getElementsByTagName('span');
    
    let checkboxes = ul.getElementsByTagName('input');

    
    for (let i = 0; i < spa.length; i++) {
        if(checkboxes[i].checked){  
            spa[i].style.color = "gray";
        }else{
            spa[i].style.color = "black";
        }
    }
});


