const fs = require('fs');

var bf = new Buffer('./01.txt');

// 第一个参数传入一个 Buffer
fs.watch(bf, (eventType, filename) => {
  console.log(`eventType:${eventType}`);
  if (filename) console.log(`filename:${filename}`);
})
