const fs = require('fs');

var path = './01.txt';

fs.open(path, 'r', (err, fd) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`fd: ${fd}`);
  }
})

console.log('异步打开文件');
