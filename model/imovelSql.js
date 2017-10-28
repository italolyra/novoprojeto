var db = require('../config/db');

module.exports = function() {

    this.find = function(nome,retorno) {
        var con = db();

        var sql = "SELECT imob_imoveis.imovel_chamada, Dormitorios, MQde,MQate,projeto_paisagismo,area_cobertura,tipo_cobertura," +
            "n_quartos_cobertura,valor_medio_cobertura,valor_medio_unid,imovel_superlanca_frase,imovel_endereco," +
            "imovel_endereco_num,imovel_endereco_complemento,imovel_cidade,imovel_valor,imovel_valor_de,imovel_valor_ate," +
            "imovel_youtube,bai_title,const_title,sit_title,percentualObra,percentualEntrada,imovel_info_adicionais,imovel_mapa," +
            "imovel_youtube,cat_title,imovel_inc_obs,loc_title,imovel_id,longetude,latitude,imovel_superlanca_foto," +
            "area_terreno,n_blocos,n_elevadores,n_vagas,n_predios,n_unid,n_unid_andar,projeto_arquitetura," +
            "imob_imoveis.dataEntrega,imob_imoveis.imovel_title ,imob_imoveis.dataLancamento ," +
            "imob_imoveis.imovel_tagkeys ,imob_imoveis.imovel_descricao , imob_imoveis.imovel_nome, imob_imoveis_bairros.bai_nome," +
            " imob_imoveis_negociacao.neg_nome, imob_imoveis_localizacao.loc_nome, imob_imoveis_construtoras.const_nome, " +
            "imob_imoveis_situacao.sit_nome, imob_imoveis_categorias.cat_nome,imovel_status,imovel_mostrar_busca " +
            "FROM imob_imoveis " +
            "LEFT JOIN imob_imoveis_bairros ON imob_imoveis.imovel_bairro = imob_imoveis_bairros.bai_id " +
            "LEFT JOIN imob_imoveis_construtoras ON imob_imoveis.imovel_construtora = imob_imoveis_construtoras.const_id " +
            "LEFT JOIN imob_imoveis_situacao ON imob_imoveis.imovel_situacao = imob_imoveis_situacao.sit_id " +
            "LEFT JOIN imob_imoveis_negociacao ON imob_imoveis.imovel_negociacao = imob_imoveis_negociacao.neg_id " +
            "LEFT JOIN imob_imoveis_localizacao ON imob_imoveis.imovel_localizacao = imob_imoveis_localizacao.loc_id " +
            "LEFT JOIN imob_imoveis_categorias ON imob_imoveis.imovel_cat_id = imob_imoveis_categorias.cat_id " +
            "WHERE (imovel_status =1  AND imovel_mostrar_busca =1 AND imovel_chamada LIKE '%" +nome+"%') " ;
        return con.query(sql, retorno);

        //  return con.query('select * from imob_imoveis where imovel_id = ?' ,id, retorno);

    };











    this.all = function(retorno) {

        var con = db();
        var sql = "SELECT imob_imoveis.imovel_chamada, Dormitorios, MQde,MQate,projeto_paisagismo,area_cobertura,tipo_cobertura," +
            "n_quartos_cobertura,valor_medio_cobertura,valor_medio_unid,imovel_superlanca_frase,imovel_endereco," +
            "imovel_endereco_num,imovel_endereco_complemento,imovel_cidade,imovel_valor,imovel_valor_de,imovel_valor_ate," +
            "imovel_youtube,bai_title,const_title,sit_title,percentualObra,percentualEntrada,imovel_info_adicionais,imovel_mapa," +
            "imovel_youtube,cat_title,imovel_inc_obs,loc_title,imovel_id,longetude,latitude,imovel_superlanca_foto," +
            "area_terreno,n_blocos,n_elevadores,n_vagas,n_predios,n_unid,n_unid_andar,projeto_arquitetura," +
            "imob_imoveis.dataEntrega,imob_imoveis.imovel_title ,imob_imoveis.dataLancamento ," +
            "imob_imoveis.imovel_tagkeys ,imob_imoveis.imovel_descricao , imob_imoveis.imovel_nome, imob_imoveis_bairros.bai_nome," +
            " imob_imoveis_negociacao.neg_nome, imob_imoveis_localizacao.loc_nome, imob_imoveis_construtoras.const_nome, " +
            "imob_imoveis_situacao.sit_nome, imob_imoveis_categorias.cat_nome,imovel_status,imovel_mostrar_busca " +
            "FROM imob_imoveis " +
            "LEFT JOIN imob_imoveis_bairros ON imob_imoveis.imovel_bairro = imob_imoveis_bairros.bai_id " +
            "LEFT JOIN imob_imoveis_construtoras ON imob_imoveis.imovel_construtora = imob_imoveis_construtoras.const_id " +
            "LEFT JOIN imob_imoveis_situacao ON imob_imoveis.imovel_situacao = imob_imoveis_situacao.sit_id " +
            "LEFT JOIN imob_imoveis_negociacao ON imob_imoveis.imovel_negociacao = imob_imoveis_negociacao.neg_id " +
            "LEFT JOIN imob_imoveis_localizacao ON imob_imoveis.imovel_localizacao = imob_imoveis_localizacao.loc_id " +
            "LEFT JOIN imob_imoveis_categorias ON imob_imoveis.imovel_cat_id = imob_imoveis_categorias.cat_id " +
            "WHERE (imovel_status =1  AND imovel_mostrar_busca =1 AND imovel_chamada LIKE '%" +nome+"%') " +
            "AND (imovel_descricao LIKE '%" +nome+"%' OR bai_nome LIKE '%" +nome+"%' " +
            "OR  imovel_tagkeys LIKE '%" +nome+"%' OR  imovel_endereco LIKE '%" +nome+"%') " ;


       // ->leftJoin('imob_imoveis_localizacao', 'bai_zona', '=', 'loc_id')
       //  console.log(retorno);
        return con.query(sql,retorno);
       // return con.query('select * from imob_imoveis' ,retorno);

    };





    return this;
    
};

