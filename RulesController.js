
//##################################################################################
//   JS: Faz controle das requisições para a entidade Regras
//
//
//
//##################################################################################

// Inicia módulos 
var express   =    require("express");
var bodyParser = require('body-parser')
var respository = require("./RegrasRepository");


// create application/json parser 
var jsonParser = bodyParser.json()
var app       =    express();

//
// Operações de CRUD com a entidade Rule
//
/////////////////////////////////////////////////////////////
app.get("/listRule",function(req,res){
    
    respository.listRule(res);
    
});

app.post("/createRule", jsonParser, function(req,res){
    
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log("Rule.name =  " +  req.body.User.username);
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  
    // Recupera o Rule do request
    var Rule = req.body.Rule;
    
    // Grava Rule na base
    respository.createRule(Rule,res);
    
    //
    res.json({"code" : 200, "status" : "OK!!! Test operation Create Rule"});
    return;                                        
            
});

app.post("/removeRule", jsonParser, function(req,res){
    
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log("Rule.id =  " +  req.body.Rule.id);
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  
    // Recupera o Rule do request
    var Rule = req.body.Rule;
    
    // Grava Rule na base
    respository.removeRule(Rule,res);
    
    res.json({"code" : 200, "status" : "OK!!! Test operation Remove Rule"});
    return;                                        
            
});


app.post("/updateRule", jsonParser, function(req,res){
    
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log("Rule.id       =  " +  req.body.Rule.id);
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  
    // Recupera o Rule do request
    var Rule = req.body.Rule;
    
    // Grava Rule na base
    respository.updateRule(Rule,res);
    
    res.json({"code" : 200, "status" : "OK!!! Test operation Update Rule"});
    return;                                        
            
});


// Listener - Porta 3000
app.listen(3000);
