const fs = require('fs');

var path = './01.txt';

fs.open(path, 'r', (err, fd) => {
  if (err) {
    console.log(err);
  } else {
    fs.close(fd, (err) => { // 回调嵌套会让代码难以阅读
      var tip = err ? err : `close success`;
      console.log(tip);
    })
  }
})
