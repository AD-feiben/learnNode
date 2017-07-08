# File System 文件系统

NodeJS 提供了 ‘fs’ 模块给我们操作文件以及文件夹，我们可以通过 `require('fs')` 的方式使用该模块。所有的方法都有异步和同步的形式。

>异步方法的最后一个参数都是回调函数，该回调函数的第一个参数都会保留给异常，如果操作成功则为 `null` 或 `undefined`。下面为异步操作的例子。

```javascript
const fs = require('fs'); // 引入 fs 模块

fs.unlink('test', (err) => {
  if (err) throw err; // 删除失败时，抛出错误信息
  console.log('成功删除 test');
})
```

>当使用同步方法时，任何异常都会被立即抛出。可使用 `try/catch` 来捕获异常，或者让异常向上冒泡。下面为同步操作的例子。

```javascript
const fs = require('fs');

fs.unlinkSync('test');
console.log('成功删除 test');
```

>【注】同步的操作会阻塞进程，直到完成。异步操作不会阻塞进程，但是不能保证执行顺序。
