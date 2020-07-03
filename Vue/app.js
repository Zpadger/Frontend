// 快速创建服务器
// 导入 http 内置模块
const http = require('http')
// 这个核心模块能够解析 URL 地址，从而拿到 pathname query
const urlModule = require('url')

// 创建一个 http 服务器
const server = http.createServer()

// 监听 http 服务器的 request 请求
server.on('request', function (req, res) {
    // write your code here...

    // const url = req.url;
    const { pathname: url, query } = urlModule.parse(req.url, true); // 解析成一个对象

    if (url === '/getscript'){
        // 拼接一个合法的 JS 脚本 这里拼接的是一个方法的调用
        // var scriptStr = 'show()';

        var data = {
            name: 'yjj',
            age: 18,
            gender: '女孩子'
        }

        var scriptStr = `${query.callback}(${JSON.stringify(data)})` // 转换成字符串

        // res.end 发送给客户端，客户端把这个字符串当做 JS 代码解析执行
        res.end(scriptStr);
    }else {
        res.end('404');
    }
})

// 指定端口号并启动服务器监听
server.listen(3000, function () {
    console.log('server listen at http://127.0.0.1:3000');

})