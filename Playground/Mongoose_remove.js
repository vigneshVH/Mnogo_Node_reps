const {ObjectId}=require('mongodb');
const {mongoose}=require('./../Server/DB/mongoose');
const {Todo}=require('./../Server/Models/todo');
const {User}=require('./../Server/Models/user');
// //Todo.remove
// Todo.remove({}).then((result)=>
// {
//   console.log(result);
// });
//
// //Todo.findOneAndRemove
//
// Todo.findOneAndRemove({_id:''}).then((todo)=>
//  {
//
//   });

//Todo.findByIdAndRemove
Todo.findByIdAndRemove('5b06a65bbd5cc0a8291b0a69').then((todo)=>
{
  console.log(todo);
});
