const express = require('express');
const router = express.Router();

const db = require('../seedDB');
const cheerio = require('cheerio');
const request = require('request');
const wordOfDay = [];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Hello World!');
});

router.get('/food', function (req, res, next) {
  res.send(
    JSON.stringify(db.foodInfo)
  );
});

router.get('/:id', function (req, res) {
  console.log(req.params)
  res.send( JSON.stringify(db.foodInfo[req.params.id]))
});

router.get('/user', function(req, res, next) {
  res.send('Respond with a resource');
});

module.exports = router;
