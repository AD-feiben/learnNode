const fs = require('fs');

var path = './test';

var options = {
  encoding: 'buffer'
};

// fs.readdir(path, 'buffer', (err, files) => { // ①
fs.readdir(path, options, (err, files) => { // ②
  if (err) {
    console.log(err);
  } else {
    console.log(files);
  }
})
