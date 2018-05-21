var express=require('express');
var bodyParser=require('body-parser');




var {mongoose}=require('./Db/mongoose');
var {Todo}=require('./Models/Todo');
var {Vinai}=require('./Models/Vinai');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>
{
    var todo=new Todo({text:req.body.text});

    todo.save().then((doc)=>
    {
    res.send(doc);
  },(e)=>
    {
      res.status(400).send(e);
    })
});

app.listen(3000,()=>
{
console.log("Started port 3000");
});
