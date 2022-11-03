const express = require("express");
const app = express();

app.use(express.json());

//importamos las rutas
const productos = require("./routes/products")

app.use('/api',productos) // Sujeto a decision (Ruta del navegador)

module.exports = app