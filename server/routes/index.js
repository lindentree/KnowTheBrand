const express = require('express');
const router = express.Router();
const brandCtrl = require('../controller/brands');

const db = require('../seedDB');
const cheerio = require('cheerio');
const request = require('request');

router.get('/food', function (req, res, next) {
  res.send(
    JSON.stringify(db.foodInfo)
  );
});

// router.get('/:id', function (req, res) {
//   console.log(req.params);
//   res.send(JSON.stringify(db.foodInfo[req.params.id]))
// });

router.get('/:name', brandCtrl.find);


module.exports = router;
