const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require('./routes/index');
const brandCtrl = require('./controller/brands');

require('dotenv').config();

const fileUpload = require('express-fileupload');
const { infer } = require('./tensorflow/pkg/ai_starter_lib.js');

const fs = require('fs');
const data_model = fs.readFileSync("./tensorflow/mobilenet_v2_1.4_224_frozen.pb");

const labels = [];
fs.readFileSync('./tensorflow/imagenet_slim_labels.txt','utf-8').split(/\r?\n/).forEach(
  function(line){
    labels.push(line);
  }
);

//connect to database
require('./config/database');

// const resultParseQuery = async (result) => {
//   let affiliates = null;
//   if (result==='water bottle') {
//     brandCtrl.find

//   }

// }

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(fileUpload());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/food', routes);

app.post('/infer', function (req, res, next) {

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  console.log ("Received " + req.files.image.name + " with size: " + req.files.image.size);

  let image_file = req.files.image.data;

  //console.time(image_file.name);
  let result = JSON.parse( infer(data_model, image_file, 224, 224) );
  //console.timeEnd(image_file.name);

  let confidence = "low";
  if (result[0] > 0.75) {
    confidence = "very high";
  } else if (result[0] > 0.5) {
    confidence = "high";
  } else if (result[0] > 0.2) {
    confidence = "medium";
  }

  res.send("Detected <b>" + labels[result[1]-1] + "</b> with <u>" + confidence + "</u> confidence.")
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const PORT =  process.env.PORT || 8001;

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})


module.exports = app;
