const fs = require('fs');

var path = './test_a+'; // dir

fs.open(path, 'a+', (err, fd) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`fd: ${fd}`);
  }
})
