"use strict"; //faz com que seja mais criterioso

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();

//conecta ao banco
mongoose.connect(
  "mongodb+srv://root:122511@cluster1.oxei6go.mongodb.net/ndstr?retryWrites=true&w=majority"
);

//carregando os models
const Product = require("./models/product");

//carrega as rotas
const indexRoute = require("./routes/index-route"); //rota de teste
const productRoute = require("./routes/product-route"); //rota de teste

app.use(bodyParser.json()); //converte todo app para JSON

app.use(
  bodyParser.urlencoded({
    // codifica as urls
    extended: false,
  })
);
app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app; //exporta algo desta classe
