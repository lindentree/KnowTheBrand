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

      res.send(JSON.stringify(brand))
    });
}

//TODO check JSON.parse(JSON.stringify(brand)) 

function show(req, res){
  //grab all from db

}
