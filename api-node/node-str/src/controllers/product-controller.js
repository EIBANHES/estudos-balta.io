"user strict";

exports.post = (req, res, next) => {
  res.status(201).send(req.body);
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
