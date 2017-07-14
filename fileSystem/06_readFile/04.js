const fs = require('fs');

var path = './01.txt';

try {
  // ①
  // var fd = fs.openSync(path, 'r');
  // var data = fs.readFileSync(fd);

  // ②
  var data = fs.readFileSync(path);

  console.log(data); // <Buffer 61 62 63 64 0a>
} catch (e) {
  console.log(e);
}
