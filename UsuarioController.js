
//##################################################################################
//   JS: Faz controle das requisições para a entidade Usuario
//
//
//
//##################################################################################

// Inicia módulos 
var express   =    require("express");
var bodyParser = require('body-parser')
var respository = require("./UsuarioRepository");


// create application/json parser 
var jsonParser = bodyParser.json()
var app       =    express();

//
// Operações de CRUD com a entidade User
//
/////////////////////////////////////////////////////////////
app.get("/listUser",function(req,res){
    
    respository.listUser(res);
    
});

app.post("/createUser", jsonParser, function(req,res){
    
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log("User.userName =  " +  req.body.User.username);
    console.log("User.passWord =  " +  req.body.User.password);
    console.log("User.nome     =  " +  req.body.User.nome);
    console.log("User.active   =  " +  req.body.User.active);
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  
    // Recupera o User do request
    var User = req.body.User;
    
    // Grava User na base
    respository.createUser(User,res);
    
    //
    res.json({"code" : 200, "status" : "OK!!! Test operation Create User"});
    return;                                        
            
});

app.post("/removeUser", jsonParser, function(req,res){
    
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log("User.id =  " +  req.body.User.id);
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  
    // Recupera o User do request
    var User = req.body.User;
    
    // Grava User na base
    respository.removeUser(User,res);
    
    res.json({"code" : 200, "status" : "OK!!! Test operation Remove User"});
    return;                                        
            
});


app.post("/updateUser", jsonParser, function(req,res){
    
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log("User.id       =  " +  req.body.User.id);
    console.log("User.password =  " +  req.body.User.password);
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  
    // Recupera o User do request
    var User = req.body.User;
    
    // Grava User na base
    respository.updateUser(User,res);
    
    res.json({"code" : 200, "status" : "OK!!! Test operation Update User"});
    return;                                        
            
});


// Listener - Porta 3000
app.listen(3000);
