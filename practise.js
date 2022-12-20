const http = require('http')
const server=http.createServer((req,res)=>{
    res.write('pooja')
    res.end()
    
});      
server.listen(4000,()=>{
    console.log('pooja')
})
    