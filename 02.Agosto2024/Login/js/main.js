const users = [
    { username: 'u1', email: 'u1@gmail.com', password: 'u123456' },
    { username: 'u2', email: 'u2@gmail.com', password: 'u223456' }
];

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('your_email').value;
    const password = document.getElementById('your_pass').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Bienvenido");
        window.location.href = "./pages/pagina.html";
    } else {
        alert("Usuario Incorrecto");
    }
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    
    event.preventDefault();

    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const re_pass = document.getElementById('re_pass').value;
    const check = document.getElementById('agree-term');
    
    if(username!=="" && email!=="" && password!=="" && re_pass!==""){

        if(password === re_pass){
            if(password.length > 5){

                if(check.checked === true){
                    const user =  {username, email, password};

                    users.push(user);
                    alert("Usuario ingresado correctamente");
                    document.getElementById("sign-inID").style.display = "initial";
                    document.getElementById("signupID").style.display = "none";

                    document.getElementById('name').value = "";
                    document.getElementById('email').value = "";
                    document.getElementById('pass').value = ""; 
                    document.getElementById('re_pass').value = "";  
                    document.getElementById('agree-term').checked = false;   

                }else{
                    alert("Debes aceptar los terminos");
                }
            }else{
                alert("Debes introducir una contraseña con mas de 5 caracteres.")
            }
        }else{
            alert("Tus contraseñas no coinciden.")
        }
    }else{
        alert("Tienes campos vacios")
    }


});


document.getElementById("newAccount").addEventListener("click", function(event){
    document.getElementById("sign-inID").style.display = "none";
    document.getElementById("signupID").style.display = "initial";
    
    document.getElementById('your_email').value = "";
    document.getElementById('your_pass').value = "";
})

document.getElementById("backAccount").addEventListener("click", function(event){
    document.getElementById("sign-inID").style.display = "initial";
    document.getElementById("signupID").style.display = "none";

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('pass').value = ""; 
    document.getElementById('re_pass').value = "";  
    document.getElementById('agree-term').checked = false;
})