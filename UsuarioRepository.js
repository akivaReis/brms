//
var mysql     =    require('mysql');

// Inicia o Pool - Acesso Mysql
var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : 'ravakiva77',
    database : 'brms',
    debug    :  false
});


//
// Cria o Usuario 
//
/////////////////////////////////////
exports.createUser = function (User,res) {
    
    pool.getConnection(function(err,connection){
       
        if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("INSERT INTO  tb_user SET name = '" + User.nome + "' ,username = '"+ User.username + "' ,password = '" + User.password +"' , active = '"+ User.active +"' " ,function(err,rows){
            
        connection.release();
            
        if(err) {
          console.error('Erro ao criar Usuario !!!' + err);
        }
    });

        connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
        
  });
}


//
//  Remove o Usuario do sistema
//
//////////////////////////////////////////////////////
exports.removeUser = function (User,res) {
    
    pool.getConnection(function(err,connection){
       
        if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("DELETE FROM tb_user WHERE ID = " + User.id  ,function(err,rows){
            
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
//  Remove o Usuario do sistema
//
//////////////////////////////////////////////////////
exports.removeUser = function (User,res) {
    
    pool.getConnection(function(err,connection){
       
        if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("DELETE FROM tb_user WHERE ID = " + User.id  ,function(err,rows){
            
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
//  Altera o Usuario do sistema
//
//////////////////////////////////////////////////////
exports.updateUser = function (User,res) {
    
    pool.getConnection(function(err,connection){
       
        if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("UPDATE tb_user SET password = '"+ User.password + "' WHERE ID = " + User.id  ,function(err,rows){
            
        connection.release();
            
        if(err) {
           console.error('Erro ao alterar Usuario !!!' + err);
        }
    });

    connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
        
  });
}

//
//  Lista os Usuarios do sistema
//
//////////////////////////////////////////////////////
exports.listUser = function (res) {
    
    pool.getConnection(function(err,connection){
       
        if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("SELECT * FROM tb_user"  ,function(err,rows){
            
        connection.release();
            
        if(err) {
           console.error('Erro ao alterar Usuario !!!' + err);
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