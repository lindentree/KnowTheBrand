require('./config/database');
const Brand = require('./models/brand');
const data = require('./seedDB');

Brand.deleteMany({})
  .then(function (results) {
    console.log(results);
    console.log('deleting data so there are no dupes');
    process.exit();
  });



Brand.create({ name: 'pepsi', description: 'PepsiCo, Inc. is an American multinational food, snack and beverage corporation headquartered in Harrison, New York, in the hamlet of Purchase. PepsiCo has interests in the manufacturing, marketing, and distribution of grain-based snack foods, beverages, and other products. PepsiCo was formed in 1965 with the merger of the Pepsi-Cola Company and Frito-Lay, Inc. PepsiCo has since expanded from its namesake product Pepsi to a broader range of food and beverage brands, the largest of which included an acquisition of Tropicana Products in 1998 and the Quaker Oats Company in 2001, which added the Gatorade brand to its portfolio. -Wiki', headquarters: 'Harrison, NY' })
  .then(function (result) {
    console.log(result);
    console.log('CREATED')
    process.exit();
  });

// Brand.create(data)
//   .then(function (results) {
//     console.log(results);
//     process.exit();
//   });


// Brand.findOne({ name: 'Blue Diamon Growers' })
//   .then(function (brand) {
//     console.log(brand);
//   });


// Promise.all([brand])
//   .then(function (results) {
//     return Brand.create(data.performers);
//   })
//   .then(function (movies) {
//     return Promise.all([
//       Brand.findOne({ name: 'Blue Diamond Growers' }),
//     ]);
//   })
//   .then(function (results) {  // one day we'll destructure this!
//     const brand = results[0];
//     console.log(brand)
//     console.log(results)
//   })
//   .then(function () {
//     process.exit();
//   });



