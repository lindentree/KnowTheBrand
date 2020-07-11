const Brand = require('../models/brand');

module.exports = {
  show,
  save,
}


function show(req, res) {
  let name = req.params.name
  Brand.findByName(name)
  // stubbed show
}

function save(req, res) {
  
}