var fs = require('fs');

fs.watch('01.txt', (eventType, filename) => {
  console.log(`eventType:${eventType}`);
  if (filename) console.log(`filename:${filename}`);
})
