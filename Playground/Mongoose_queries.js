const {ObjectId}=require('mongodb');
const {mongoose}=require('./../Server/DB/mongoose');
const {Todo}=require('./../Server/Models/todo');
const {User}=require('./../Server/Models/user');

var id='52b065c6da9f9a5076a72714a';

if(!ObjectId.isValid(id))
{
  console.log("ID not valid");
}




Todo.find({
  _id:id
}).then((doc1)=>{
  console.log("todos",doc1);
});

Todo.findOne({
  _id:id
}).then((doc2)=>
{
  console.log('Todo',doc2);
});

Todo.findById(id).then((doc3)=>
{
  if(!doc3)
  {
    return console.log("ID not valid");
  }
  console.log("Find by id",doc3);
}).catch((e)=> console.log(e));



User.findById(id).then((user)=>
{
 if(!user)
 {
   return console.log("Unable to find user");
 }
 console.log("vinai" ,user);
}).catch((e)=> console.log(e));
