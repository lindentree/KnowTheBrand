const Brand = require('../models/brand');

module.exports = {
  find,
  show,
}


function find(req, res) {
  let name = req.params.name
  console.log(req.params)
  Brand.find({ name: name })
    .then((err, brand) => {
      if (err) res.send(err);
      console.log(brand)
      res.send(JSON.stringify(brand))
    });
}

function show(req, res) {
  //grab all from db

}
