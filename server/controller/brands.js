const Brand = require('../models/brand');

module.exports = {
  find,
  show,
}


async function find(req, res) {
  try {
    let name = req.params.name
    const result = await Brand.find({ name: name })
    res.send(result);

  } catch (err) {
    return res.status(500).send({
      message: err.message
    })

  }
}

async function show(req, res) {
  try {
    const result = await Brand.find({})
    res.send(result);

  } catch (err) {
    return res.status(500).send({
      message: err.message
    })

  }
}
