const fs = require('fs');

var path = './01.txt'; // abcd\n

fs.readFile(path, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data); // <Buffer 61 62 63 64 0a>
  }
})
