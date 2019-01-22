const http=require('http');
const server=http.createServer((request,response)=>{
    console.log('Hello!!');
    response.setHeader('Content-Type','text/html');
    response.end('<h1>Hello</h1>');
})

server.listen(3000);