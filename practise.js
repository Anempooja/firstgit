const http = require('http')
const server=http.createServer((req,res)=>{
    console.log(req)
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write(`<head><title>Pooja</title></head>`)
    res.write(`<body><h1>welcome to my node js project<h1></body>`)
    res.end()
});      
server.listen(4000)
    