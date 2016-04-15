//
var pool = require('./util/DB.js');

//
// Cria o Fluxo 
//
/////////////////////////////////////
exports.createRule = function (Rule,res) {
    
    pool.dbConnect.getConnection(function(err,connection){
       
        if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("INSERT INTO  tb_rule SET name = '" + Flow.nome + "' ,versao = '"+ Flow.versao + "' ,active = '" + Flow.active +"' , start_date = CURDATE()" ,function(err,rows){
            
        connection.release();
            
        if(err) {
          console.error('Erro ao criar Regra !!!' + err);
        }
    });

        connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
        
  });
}


//
//  Remove o Rule do sistema
//
//////////////////////////////////////////////////////
exports.removeRule = function (Rule,res) {
    
    pool.dbConnect.getConnection(function(err,connection){
       
        if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("DELETE FROM tb_rule WHERE ID = " + Rule.id  ,function(err,rows){
            
        connection.release();
            
        if(err) {
           console.error('Erro ao remover Regra !!!' + err);
        }
    });

    connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
        
  });
}

//
//  Altera o Rule do sistema
//
//////////////////////////////////////////////////////
exports.updateRule = function (Rule,res) {
    
    pool.dbConnect.getConnection(function(err,connection){
       
        if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("UPDATE tb_rule SET password = '"+ User.password + "' WHERE ID = " + User.id  ,function(err,rows){
            
        connection.release();
            
        if(err) {
           console.error('Erro ao alterar Rule !!!' + err);
        }
    });

    connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
        
  });
}

//
//  Lista os Rule do sistema
//
//////////////////////////////////////////////////////
exports.listRule = function (res) {
    
    pool.dbConnect.getConnection(function(err,connection){
       
        if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("SELECT * FROM tb_rule"  ,function(err,rows){
            
        connection.release();
            
        if(err) {
           console.error('Erro ao alterar Regra !!!' + err);
        }
            
        res.json(rows);    
        return;    
    });

    connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
        
  });
}