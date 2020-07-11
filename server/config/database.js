const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/knowthebrand', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', function () {
  console.log('connected to MongoDB at mongodb://localhost/knowthebrand')
});

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;