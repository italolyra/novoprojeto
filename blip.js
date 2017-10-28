
let MessagingHub = require('messaginghub-client');
let WebSocketTransport = require('lime-transport-websocket');
let Lime = require('lime-js');
var watson = require("watson-developer-cloud");
var conversation = new watson.conversation({
    username: 'f9ea22db-51d2-4ee2-a8e2-f85fd585310a',
    password: 'tl0LIgYdXq0A',
    version: 'v1',
    version_date: '2017-05-26'
});

var client = new MessagingHub.ClientBuilder()
    .withIdentifier('nodesdkwatson')
    .withAccessKey('RXJ6b3VXUGZWb1FXZ0pKM1pMczI=')
    .withTransportFactory(() => new WebSocketTransport())
.build();

client.addMessageReceiver(true, function (message) {
   // console.log(message);
  

//console.log(entrada);
conversation.message({
    workspace_id: '4b9104b0-c865-4ba8-84a7-87423b348300',
    //vem do cliente
    input: {
       text : message.content
},
       context: {
        conversation_id:  message.content.id,
        tipo: "recreio"
       },      
},  function(err, response) {
    if (err){
        //ero
        console.log('error:', err);
        res.send(err);
    }else{

        if(response.context.busca === 'sim' && response.context.imoveis )
        {
           var imoveis = require('./model/imovelSql')();
            var imovel = imoveis.find(response.context.imoveis,function (erro,resultado) {
                   console.log(resultado[0].imovel_chamada);
                   if(resultado[0] && !erro){
                    response.context.imob= resultado[0].imovel_chamada
                    response.context.quartos= resultado[0].Dormitorios+' quartos'
                    response.context.construtor=  resultado[0].const_nome 
                    response.context.tipo= resultado[0].cat_nome
                    response.context.faixapreco='R$ '+(resultado[0].imovel_valor_de).toLocaleString('pt-BR')
                    response.context.m2= 'com areas de ' +resultado[0].MQde+' m² até ' +resultado[0].MQate+' m² '
                    response.context.busca= ''
                    var text   =response.context.imob+ ' são ' +response.context.tipo+ ' de '+response.context.quartos
                    var msg = { type: "text/plain", content: text,to: message.from, id: response.context.conversation_id };
                    return response
                    client.sendMessage(msg);
                    
                   }
                   else{
                       console.log("Imovel não cadastrado");
                   }
               });

        }else{
            //  console.log(response)
              var msg = { type: "text/plain", content: response.output.text[0],to: message.from, id: response.context.conversation_id };
              console.log(response)
              client.sendMessage(msg);
          }

    } 
});

})

client.connect()
    .then(function (session) {
        console.log('Connectado');
    })
    .catch(function (err) {
        console.log(err);
    });