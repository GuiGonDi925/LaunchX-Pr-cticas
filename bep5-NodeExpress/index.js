let express = require('express');
let app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',function(req,res) {
    res.send("Hola Mundo");
});

app.post('/',function(req,res) {
    res.send(`Te llamas ${req.body.name}`);
});

app.put('/',function(req,res) {
    res.send(`Has actualizado el registro número ${req.body.id}`);
});

app.delete('/users',function(req,res) {
    res.send(`Has borrado el registro: ${req.query.user}`);
});

let server = app.listen(8080,function(){
    let host = server.address().adrees;
    let port = server.address().port;

    console.log("Aplicacion escuchando en http://%s:%s",host,port);
});