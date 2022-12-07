console.log('Hola Mundo');
const http = require('http');
const rd = require('./modules/retrievedate');
const url = require('url');

const host = '0.0.0.0'
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    //res.write("La fecha y hora es: " + rd.RetrieveDate());
    //res.write(req.url);
    const query = url.parse(req.url,true).query;
    const text = query.year + " " + query.month
    //res.end("Hola Mundo");
    res.end(text);
});

server.listen(port,host,()=>{
    console.log("Server encendido en: "+ host + "/" + port)
});