"user strict";

const mongoose = require("mongoose");
const Product = mongoose.model("Product"); //importa o modelo de produto

//CRUDS
exports.get = (req, res, next) => {
  Product.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.post = (req, res, next) => {
  //criando um novo produto
  let product = new Product(req.body); //instancia de product
  product
    .save() //salva o item no banco de dados
    .then((x) => {
      res.status(201).send({
        message: "Produto cadastrado com sucesso!",
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao cadastrar o produto!",
        data: e,
      });
    });
};

exports.put = (req, res, next) => {
  const id = req.params.id; //recuperando paramentros pela url
  res.status(201).send({
    id: id,
    item: req.body,
  });
};

exports.delete = (req, res, next) => {
  res.status(200).send(req.body); //enviando uma resposta
};
