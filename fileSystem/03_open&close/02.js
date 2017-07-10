const fs = require('fs');

var path = './01.txt';

try {
  var fd = fs.openSync(path, 'r');
  if (fd) console.log(`fd: ${fd}`);
} catch (err) {
  console.log(err);
}

console.log('同步打开文件');
