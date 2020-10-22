const express = require('express');
const bodyParser = require('body-parser');
const app = express()

const port = 3000;
 
//precisamos avisar o Express para utilizar o body-parser

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});

const mensagens = ['primeira mensagem', 'segunda mensagem'];

//ler todas as msgs

app.get('/mensagens', function(req, res){
    res.send(mensagens);
});

//Criar
app.post('/mensagens', function(req,res){
    res.send('Criar mensagem');
});
 
app.listen(port, function(){
console.log('App rodando em http://localhost:' + port);
});



