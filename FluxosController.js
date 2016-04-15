
//##################################################################################
//   JS: Faz controle das requisições para a entidade Fluxos
//
//
//
//##################################################################################

// Inicia módulos 
var express   =    require("express");
var bodyParser = require('body-parser')
var respository = require("./FluxosRepository");


// create application/json parser 
var jsonParser = bodyParser.json()
var app       =    express();

//
// Operações de CRUD com a entidade Flow
//
/////////////////////////////////////////////////////////////
app.get("/listFlow",function(req,res){
    
    respository.listFlow(res);
    
});

app.post("/createFlow", jsonParser, function(req,res){
    
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log("Rules.name =  " +  req.body.Rules.name);
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  
    // Recupera o Flow do request
    var Flow = req.body.Flow;
    
    // Grava Flow na base
    respository.createFlow(Flow,res);
    
    //
    res.json({"code" : 200, "status" : "OK!!! Test operation Create Flow"});
    return;                                        
            
});

app.post("/removeFlow", jsonParser, function(req,res){
    
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log("Flow.id =  " +  req.body.Flow.id);
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  
    // Recupera o Flow do request
    var Flow = req.body.Flow;
    
    // Grava Flow na base
    respository.removeFlow(Flow,res);
    
    res.json({"code" : 200, "status" : "OK!!! Test operation Remove Flow"});
    return;                                        
            
});


app.post("/updateFlow", jsonParser, function(req,res){
    
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log("Flow.id       =  " +  req.body.Flow.id);
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  
    // Recupera o Flow do request
    var Flow = req.body.Flow;
    
    // Grava User na base
    respository.updateFlow(Flow,res);
    
    res.json({"code" : 200, "status" : "OK!!! Test operation Update Flow"});
    return;                                        
            
});


// Listener - Porta 3000
app.listen(3000);
