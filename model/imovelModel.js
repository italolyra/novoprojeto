var mysql = require('mysql');

var con = function() {

    return mysql.createConnection({
        host:'lancamentosrj.com',
        user:'lancamen_user',
        password:'jura@#2407',
        database:'lancamen_site'
    });
};
module.exports = function(response,callback) {

    con.find(response.context.imoveis,function (erro,resultado) {
        console.log(resultado[0].imovel_chamada);
        if(resultado[0] && !erro){
            //vai o metodo
            response.context.imob = resultado[0].imovel_chamada;
            response.context.quartos = resultado[0].Dormitorios+' quartos';
            response.context.construtor = resultado[0].const_nome ;
            response.context.tipo = resultado[0].cat_nome;
            response.context.faixapreco = 'R$ '+(resultado[0].imovel_valor_de).toLocaleString('pt-BR');
            response.context.m2 = 'com areas de ' +resultado[0].MQde+' m² até ' +resultado[0].MQate+' m² ';
            response.context.busca = '';
            console.log(response);
            return callback(null, response);

        }else{
            console.log("Imovel não cadastrado");

        }

    });

};
