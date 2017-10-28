var mysql = require('mysql');

var con = function() {

    return mysql.createConnection({
        host:'lancamentosrj.com',
        user:'lancamen_user',
        password:'',
        database:''
    });
};



module.exports = con;