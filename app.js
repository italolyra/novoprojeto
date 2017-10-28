var express = require('express');
var app = express();



app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});



//url configurada no get
app.get('/mensagem', function(req, res) {
    var watson = require("watson-developer-cloud");
    console.log(res);

    var conversation = new watson.conversation({
        username: 'f9ea22db-51d2-4ee2-a8e2-f85fd585310a',
        password: 'tl0LIgYdXq0A',
        version: 'v1',
        version_date: '2017-05-26'
    });

    var context = {};

    conversation.message({
        workspace_id: '4b9104b0-c865-4ba8-84a7-87423b348300',
        //vem do cliente
        input: {'text': req.query.texto[0]},
        context: context
    },  function(err, response) {
        if (err){
            //ero
            console.log('error:', err);
            res.send(err);
        }
        else{
            //devolvo para o usuario
            res.send({'resposta' : response.output.text});
        }
    });
});