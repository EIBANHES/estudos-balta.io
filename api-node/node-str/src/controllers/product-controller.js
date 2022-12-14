"user strict";

const mongoose = require("mongoose");
const Product = mongoose.model("Product"); //importa o modelo de produto
const ValidationContract = require("../validators/fluent-validator");
const repository = require("../repositories/product-repository");
/**
 * Cruds
 */

exports.get = (req, res, next) => {
  repository
    .get()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.getBySlug = (req, res, next) => {
  repository
    .getBySlug(req.params.slug)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
  repository
    .getById(req.params.id) // lista por id
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.getByTag = (req, res, next) => {
  repository
    .getByTag(req.params.tag)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.post = (req, res, next) => {
  let contract = new ValidationContract();

  contract.hasMinLen(
    req.body.title,
    3,
    "O titulo deve conter pelo menos 3 caracteres"
  );
  contract.hasMinLen(
    req.body.slug,
    3,
    "A slug deve conter pelo menos 3 caracteres"
  );
  contract.hasMinLen(
    req.body.description,
    3,
    "A descrição deve conter pelo menos 3 caracteres"
  );

  //se os dados forem invalidos
  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end;
    return;
  }

  repository
    .create(req.body)
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
  
  repository
    .update(req.params.id, req.body)
    .then((x) => {
      res.status(201).send({ message: "Produto atualizado com sucesso!!!" });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao atualizar o produto",
        data: e,
      });
    });
};

exports.delete = (req, res, next) => {
  repository
    .delete(req.body.id)
    .then((x) => {
      res.status(200).send({
        message: "Produto removido com sucesso!!!",
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao remover o produto",
        data: e,
      });
    });
};
