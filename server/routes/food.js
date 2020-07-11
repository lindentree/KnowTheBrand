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
})

router.get('/word', function (req, res) {
  // allow access from other domains
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');

  // use Cheerio to make request
  request({
    method: 'GET',
    url: 'http://www.wordthink.com'
  }, function (err, response, body, callback) {
    if (err) return console.error(err);

    // get the HTML body from WordThink.com
    $ = cheerio.load(body);

    if (wordOfDay.length > 0) {
      wordOfDay = [];
    }

    var post = $('#content .singlemeta:first-child .post');
    var word = post.find('.title').eq(0).text().replace('\r\n\t\t\t\t\t', '').replace('\r\n\t\t\t\t', '');
    var definition = post.find('p').eq(0).text().replace('\n', '');

    // create an object
    wordOfDay.push({ word: word, definition: definition })
  });

  res.send(JSON.stringify(wordOfDay, null, 2))

});


module.exports = router;
