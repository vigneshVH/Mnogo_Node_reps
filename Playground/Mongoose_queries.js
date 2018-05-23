const {mongoose}=require('./../Server/Db/mongoose');
const {Todo}=require('./../Server/Models/Todo');
const {ObjectID}=require('mongodb');
const {Vinai}=require('./../Server/Models/Vinai');
//var id="5b0254fa55f8cc6f10d0db62";


// if(!ObjectID.isValid(id))
// {
//   console.log("it is a not a valid id");
// }
// Todo.find({
//   _id:id
// }).then((todos)=>
// {
//   console.log('Todos',todos);
// });
//
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>
// {
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>
// {
//   if(!todo)
//   {
//   return console.log("ID not found");
//   }
//   console.log('Todo by id',todo);
// }).catch((e)=> console.log(e));
Vinai.findById("5b03c43b77f5240a407b10b0").then((doc)=>
{
  if(!doc)
  {
    return console.log('Unable to  find Vinai');
  }
  console.log(JSON.stringify(doc,undefined,2));
},(e)=>{
  console.log(e);
}
);
