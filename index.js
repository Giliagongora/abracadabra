// importar express
const express = require("express");

// instancias express
const app = express();

// levantar servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/ruta", (req, res) => {
  res.send("Respuesta de ejemplo");
});

// paso 2  milddlegare de uso general, no asociado a ninguna ruta
app.use(express.static("assets"));

const usuarios = ["Violeta", "Alfonsina", "Gladys"];

// creacion de primera ruta
app.get("/abracadabra/usuarios", (req, res) => {
  res.send({ usuarios });
});

// creacion middleware de 2da ruta
app.use("/abracadabra/juego/:usuario", (req, res, next) => {
  usuarios.includes(req.params.usuario) ? next() : res.redirect("/who.jpeg");
});

app.get("/abracadabra/juego/:usuario", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/abracadabra/conejo/:n", (req, res) => {
  // Genera un número aleatorio entre 1 y 4
  let numeroAleatorio = Math.floor(Math.random() * 4) + 1;
  console.log(numeroAleatorio);
  numeroAleatorio === parseInt(req.params.n) ?  res.redirect("/conejito.jpg") : res.redirect("/voldemort.jpg");
});

app.get("*", (req, res) => {
  console.log(res);
  res.send("Está página no existe");
});
