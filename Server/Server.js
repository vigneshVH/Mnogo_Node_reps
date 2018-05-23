var express=require('express');
var bodyParser=require('body-parser');


var {mongoose}=require('./DB/mongoose');
var {Todo}=require('./Models/todo');
var {User}=require('./Models/user');

var app=express();


app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
   var todo=new Todo({
    text:req.body.text });


    todo.save().then((doc)=>
  {
    res.send(doc);
  },(e)=>
{
  console.log(res.status(400).send(e));
});


});


app.listen(3000,()=>
{
  console.log("started port 3000");
});
