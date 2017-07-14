const fs = require('fs');

var path = './01.txt'; // abcd\n

fs.readFile(path, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data); // abcd\n
  }
})
