const express = require('express');
const router = express.Router();
const brandCtrl = require('../controller/brands');


const db = require('../seedDB');
const cheerio = require('cheerio');
const request = require('request');

router.get('/', brandCtrl.show);
router.get('/:name', brandCtrl.find);


module.exports = router;
