//
var pool = require('./util/DB.js');

//
// Cria o Fluxo 
//
/////////////////////////////////////
exports.createFlow = function (Flow,res) {
    
    pool.dbConnect.getConnection(function(err,connection){
       
        if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("INSERT INTO  tb_flow SET name = '" + Flow.nome + "' ,versao = '"+ Flow.versao + "' ,active = '" + Flow.active +"' , start_date = CURDATE()" ,function(err,rows){
            
        connection.release();
            
        if(err) {
          console.error('Erro ao criar Fluxo !!!' + err);
        }
    });

        connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
        
  });
}


//
//  Remove o Flow do sistema
//
//////////////////////////////////////////////////////
exports.removeFlow = function (Flow,res) {
    
    pool.dbConnect.getConnection(function(err,connection){
       
        if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("DELETE FROM tb_flow WHERE ID = " + Flow.id  ,function(err,rows){
            
        connection.release();
            
        if(err) {
           console.error('Erro ao remover Usuario !!!' + err);
        }
    });

    connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
        
  });
}

//
//  Altera o Flow do sistema
//
//////////////////////////////////////////////////////
exports.updateFlow = function (User,res) {
    
    pool.dbConnect.getConnection(function(err,connection){
       
        if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("UPDATE tb_flow SET active = '"+ Flow.active + "' WHERE ID = " + Flow.id  ,function(err,rows){
            
        connection.release();
            
        if(err) {
           console.error('Erro ao alterar Flow !!!' + err);
        }
    });

    connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
        
  });
}

//
//  Lista os Flow do sistema
//
//////////////////////////////////////////////////////
exports.listFlow = function (res) {
    
    pool.dbConnect.getConnection(function(err,connection){
       
        if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("SELECT * FROM tb_flow"  ,function(err,rows){
            
        connection.release();
            
        if(err) {
           console.error('Erro ao listar Flow !!!' + err);
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