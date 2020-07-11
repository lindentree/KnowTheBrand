const Brand = require('../models/brand');

module.exports = {
  show,

}


function show(req, res) {
  let name = req.params.name
  Brand.findByName(name)
  // stubbed show
}