const Brand = require('../models/brand');

module.exports = {
  find,
  show,
}


async function find(req, res) {

  try {
    let name = req.params.name
    const result = await Brand.find({ name: name })
    console.log("result: ", result)
    res.send(result);

  } catch(err) {
    return res.status(500).send({
        message: err.message
      })

  }
}

function show(req, res) {
  //grab all from db

}
