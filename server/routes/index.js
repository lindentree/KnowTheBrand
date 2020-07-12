const express = require('express');
const router = express.Router();
const brandCtrl = require('../controller/brands');
const path = require('path')

const db = require('../seedDB');
const cheerio = require('cheerio');
const request = require('request');

router.get('/', function (req, res, next) {
  res.send(
    db.foodInfo
  );
});
router.get('/:name', brandCtrl.find);


module.exports = router;
