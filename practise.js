const fs = require('fs');
const http = require('http')
const server=http.createServer((req,res)=>{
    const url=req.url
    const method=req.method
    if(url==='/'){
        fs.readFile("message.txt",{encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err)
            }
            res.write('<html>')
            res.write('<head><title>Enter message</title></head>')
            res.write(`<body>${data}</body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></body>')
            res.write('</html>')
            return res.end()
        })
        
    }
    else if(url === '/message' && method === 'POST'){
        const body=[]
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString()
            const message=parsedBody.split('=')[1]
            fs.writeFile('message.txt',message,err=>{
                res.statusCode=302;
                res.setHeader('Location', '/')
            
                return res.end()
            })   
    })
        }  
        else{   
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title> server</title></head>')
    res.write('<body><h1> Hello </h1></body>')
    res.write('</html>')
    res.end()}
});     
server.listen(4000)
    