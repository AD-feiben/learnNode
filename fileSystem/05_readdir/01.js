const fs = require('fs');

var path = './test';

fs.readdir(path, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
  }
})
