const fs = require('fs');

var path = './01.txt';

try {
  // 同步操作的代码更加简明易懂,但是会阻塞进程,所以在使用的时候需要选择适当的方法
  var fd = fs.openSync(path, 'r');
  fs.closeSync(fd);
  console.log(`close success`);
} catch (err) {
  console.log(err);
}
