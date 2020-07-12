const express = require('express');
const router = express.Router();
const brandCtrl = require('../controller/brands');

const db = require('../seedDB');
const cheerio = require('cheerio');
const request = require('request');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

router.get('/food', function (req, res, next) {
  res.send(
    db.foodInfo
  );
});

// router.get('/:id', function (req, res) {
//   console.log(req.params);
//   res.send(JSON.stringify(db.foodInfo[req.params.id]))
// });

router.get('/:name', brandCtrl.find);


module.exports = router;
