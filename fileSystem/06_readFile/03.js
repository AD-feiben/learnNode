const fs = require('fs');

var path = './test';

fs.readFile(path, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})
