const express = require("express");
const axios = require("axios");
const app = express();

// Sirve para que express use rutas dinamicas
app.set("view engine", "ejs");

// Damos acceso a la carpeta public
app.use(express.static("public"));

// Cargamos la pagina index como default
app.get("/", (req, res) => {
  res.render("index", { clima: null, error: null });
});

// Ruta
app.get("/clima", async (req, res) => {
  // Obtenemos el nombre de la ciudad y la API
  const city = req.query.city;
  const apiKey = "dd274f2ef257fe42e656de980fb27591";

  // Agregamos la ciudad y la api al URL
  const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  let clima;
  let error = null;
  try {
    const response = await axios.get(APIUrl);
    clima = response.data;
  } catch (error) {
    clima = null;
    error = "Error, porfavor vuelve a intentarlo";
  }
  // Ejecutar el archivo index.jsx
  res.render("index", { clima, error });
});

// Correr en el puerto 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
