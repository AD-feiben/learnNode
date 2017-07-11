const fs = require('fs');

var path = './01.txt';

try {
  var fd = fs.openSync(path, 'r');
  var bf = new Buffer(10);
  var bytesRead = fs.readSync(fd, bf, 0, 10, 0);
  console.log(bytesRead);
  console.log(bf.toString());
} catch (err) {
  console.log(err);
}
