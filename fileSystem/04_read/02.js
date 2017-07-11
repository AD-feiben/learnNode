const fs = require('fs');

var path = './01.txt'; // abcd\n

try{
  var fd = fs.openSync(path, 'r');
  var bf = new Buffer(10);
  fs.read(fd, bf, 2, 8, 1, (err, bytesRead, buffer) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`bytesRead: ${bytesRead}`);
      console.log(buffer);
      console.log(`buffer: ${buffer}`);
      console.log(`buffer === bf ${buffer === bf}`);
    }
  })
} catch (err) {
  console.log(err);
}
