const express = require('express');

var imoveis = require('../model/imovelSql')();


 var imovel = imoveis.find(response.context.imoveis,function (erro,resultado) {
        console.log(resultado[0].imovel_chamada);
        if(resultado[0] && !erro){
            var res ={
                imob: resultado[0].imovel_chamada,
                quartos: resultado[0].Dormitorios+' quartos',
                construtor:  resultado[0].const_nome ,
                tipo:resultado[0].cat_nome,
                faixapreco: 'R$ '+(resultado[0].imovel_valor_de).toLocaleString('pt-BR'),
                m2: 'com areas de ' +resultado[0].MQde+' m² até ' +resultado[0].MQate+' m² ',
                busca: ''
            };
       
            console.log(res);
            return res

        }
        else{
            console.log("Imovel não cadastrado");

        }

     

    });


