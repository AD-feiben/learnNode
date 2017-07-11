const fs = require('fs');

var path = './test';

try {
  var files = fs.readdirSync(path);
  console.log(files);
} catch (err) {
  console.log(err);
}
