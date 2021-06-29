const DB = require("../model/user");
module.exports.postRows = async function (req, res) {
  console.log(req.headers)
  console.log(req.body, "hfxbjml");
  if (req.body) {
    const resolved = await DB.create({
      name: req.body.name,
      rate: req.body.rate,
      quantity: req.body.quantity,
      discount: req.body.discount,
      taxes: req.body.taxes,
      basicCost: req.body.basicCost,
      discountAmount: req.body.discountAmount,
      finalBasicCost: req.body.finalBasicCost,
      taxAmount: req.body.taxAmount,
      totalBasicCost: req.body.totalBasicCost
    });

    console.log(resolved);
    return res.send(resolved);
  }

  return res.send("suceess");
};

module.exports.getRows = function (req, res) {

  DB.find({}, function (err, posts) {
    if (err) {
      return res.send(err);
    }
    return res.send(posts);
  });
};

module.exports.deleteRows = async function (req, res) {
  const id = req.params.rowId;
  console.log(id);
  const v = await DB.findByIdAndDelete(id);

  DB.find({}, function (err, posts) {
    if (err) {
      return res.send(err);
    }
    return res.send(posts);
  });
};