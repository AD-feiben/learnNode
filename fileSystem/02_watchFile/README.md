# fs.watchFile

`fs.watchFile(filename[, options], listener)`

这个方法与 `fs.watch` 十分相似，不过 `fs.watch` 的 listener 只有在被监听的文件修改的时候才会被调用。而 `fs.watchFile` 的 listener 在我们访问被监听的文件时，就会调用。

&emsp;filename: 被监听的文件 `<string> | <Buffer> | <URL>`

&emsp;options: `<Object>` 该参数可被省略

&emsp;&emsp;persistent: `<boolean>` 表明当文件正在被监视时，进程是否应该继续运行，默认值为 `true`

&emsp;&emsp;interval: `<integer>` 表示目标应该每隔多少毫秒被轮询，默认值为 5007

&emsp;listener: `<Function>`

&emsp;&emsp;回调函数同样有两个参数 (curr, prev)， 返回的是目标文件的 *当前状态* 和 *之前的状态* ，如果想要在被修改的时候而不是访问的时候得到通知，则需要比较 `curr.mtime` 和 `prev.mtime`。

>【注】`fs.watch` 是通过监听系统提供的各种事件实现的，而 `fs.watchFile` 是每个一段时间去检查目标文件是否发生变化，所以 `fs.watch` 更加高效，在可以使用 `fs.watch` 的时候尽量避免使用 `fs.watchFile`

>【注】我在测试的时候发现，访问目标文件的时候并没有调用 `listener`
