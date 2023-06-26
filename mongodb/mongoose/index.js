const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/prerna', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log(" we are connected");
});

const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  var greeting = "my name is " + this.name
  // console.log(greeting);
}

var kitten = mongoose.model('kitten', kittySchema);

// var kitten= new Kitten({ name: 'prernaKitty' });
// console.log(prernakitten.name); 

var harrykitty = new kitten({ name: 'harryKitty' });
var harrykitty2 = new kitten({ name: 'harryKitty2' });
// console.log(harrykitty.name);
// harrykitty.speak();

harrykitty.save(function (err, harrykitty) {
  if (err) return console.error(err);
  // harrykitty.speak();
});

harrykitty2.save(function (err, k) {
  if (err) return console.error(err);
  // k.speak();
});

kitten.find({name:"harrykitty2"}, function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})