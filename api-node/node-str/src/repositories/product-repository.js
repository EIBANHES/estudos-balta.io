"use strict";
const mongoose = require("mongoose");
const Product = mongoose.model("Product"); //import model

exports.get = () => {
  return Product.find({ active: true }, "title price slug"); // lista title, price e slug somente os ativos
};

exports.getBySlug = (slug) => {
  return Product.findOne(
    { slug: slug, active: true }, //obtem por slug
    "title description price slug tags"
  );
};

exports.getById = (id) => {
  return Product.findById(id); //procura por id
};

exports.getByTag = (tag) => {
  return Product.find(
    { tags: tag, active: true }, //procura por as tags
    "title description price slug tags" // reporta esses objetos como res
  );
};

exports.create = (body) => {
  let product = new Product(body);
  return product.save();
};

exports.update = (id, data) => { //passa como parametro o id e os dados/data
  //pega o id
  return Product.findByIdAndUpdate(id, {
    $set: {
      // -> seta todas as mudanças
      title: data.title,
      description: data.description,
      price: data.price,
      slug: data.slug,
    },
  });
};

exports.delete = (id) => {
   return Product.findOneAndRemove(id);
}