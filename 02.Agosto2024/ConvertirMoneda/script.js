
//Ponemos el codigo API de la pagina Currency
const apiKey = "3e8fce1e7350705bdbef132fb73cd147";

//Funcionalidad
function funcionalidad(moneda1, moneda2, valor){
    
    //Obtenemos los 3 parametros
    const baseCurrency = moneda1;
    const targetCurrency = moneda2;
    const amount = valor

    //Solicitamos la data en la pagina, con nuestra api, y las monedas a convertir
    const url = `http://api.currencylayer.com/live?access_key=${apiKey}&currencies=${targetCurrency}&source=${baseCurrency}`;

    //Llamamos a esa URL
    fetch(url)
    .then((response) => response.json()) // Nos convierte la informacion que llega en formato JSON mas facil de leer
    .then((data) => {
        // Manejamos la data, en donde si fue existosa la respuesta, entramos
        if (data.success) {
        const exchangeRate = data.quotes[`${baseCurrency}${targetCurrency}`]; // Obtenemos el cambio en monedas
        const convertedAmount = amount * exchangeRate; // Obtenemos el valor convertido de nuestro monto
        
        //Ingresamos el resultado
        document.getElementById('content__result').innerHTML = `${amount} ${baseCurrency} => ${convertedAmount.toFixed(3)} ${targetCurrency}`;
        } else {
        alert("El tipo de moneda no existe"); // En caso las monedas no sean validas
        limpiar();
    }
    })
    .catch((error) => console.error("Error en la solicitud:", error)); // En caso no se pueda acceder al API
}

//Limpieza
function limpiar(){
    document.getElementById('content__result').textContent = "";
    document.getElementById('monedaEntrada').value = "";
    document.getElementById('monedaSalida').value= "";
    document.getElementById('inputMoneda').value = "";
}

// Antes de entrar a la Funcionalidad aqui capturamos errores
document.getElementById("btn-convertir").addEventListener("click", function (event) {

    let moneda1 = document.getElementById('monedaEntrada').value;
    let moneda2 = document.getElementById('monedaSalida').value;
    let valor = document.getElementById('inputMoneda').value;

    if(moneda1 !== "" && moneda2 !== ""){
        if(moneda1 != moneda2){
            if(valor!=""){
                funcionalidad(moneda1, moneda2, valor);
            }else{
                alert("Esta vacio el valor de tu moneda");  
            }
        }else{
            alert("Tus monedas son iguales");   
        }
    }else{
        alert("Tus monedas estan vacias");
    }

});

// Boton limpieza
document.getElementById('btn-limpiar').addEventListener('click', function(event){
    limpiar();
});

//Evitar que se ingrese la e en input numerico
document.getElementById('inputMoneda').addEventListener('keydown', function(event) {
    if (event.key === 'e' || event.key === 'E') {
        event.preventDefault();
    }
});





