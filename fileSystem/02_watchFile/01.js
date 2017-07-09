const fs = require('fs');

var filename = '01.txt';

fs.watchFile(filename, (curr, prev) => {
  console.log(curr);
  console.log(prev);
})
