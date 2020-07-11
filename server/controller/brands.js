const Brand = require('../models/brand');

module.exports = {
  find,
  save,
}


function find(req, res) {
  let name = req.params.name
  Brand.find({ name: name })
    .then((err, brand) => {
      if (err) res.send(err);

      res.send(JSON.stringify(brand))
    });
}

//TODO check JSON.parse(JSON.stringify(brand)) 

function save(req, res) {

}

