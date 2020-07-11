var express = require('express');
var router = express.Router();
var db = require('../seedDB');
var cheerio = require('cheerio');
var request = require('request');
var wordOfDay = [];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send(
    JSON.stringify(db.foodInfo)
  );
});


router.get('/:id', function (req, res) {
  console.log(req.params)
  res.sent( JSON.stringify(db.foodInfo[req.params.id]))
});




module.exports = router;
