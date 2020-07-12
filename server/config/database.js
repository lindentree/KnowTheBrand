const mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost/knowthebrand', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });


mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`connected at ${process.env.DATABASE_URL}`)
});

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;