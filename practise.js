const fs = require('fs');
const http = require('http')
const server=http.createServer((req,res)=>{
    const url=req.url
    const method=req.method
    if(url==='/'){
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt','DUMMY')
        res.statusCode=302;
        res.setHeader('Location', '/')
        return res.end()
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title> server</title></head>')
    res.write('<body><h1> Hello </h1></body>')
});      
server.listen(4000)
    