
var mongoose=require('mongoose');



var Todo=mongoose.model('Vickies',{
 text:{
   type:String,
   required:true,
   minlength:1,
   trim:true
 },
 completed:{
   type:Boolean,
   required:false
 },
 completedAt:{
   type:Number,
   default:null
 }
});

// var newTodo=new Todo({ text:"vicky details"});
//
// newTodo.save().then((doc)=>
// {
//  console.log("values saved",doc);
// },(error)=>
// {
//  console.log('unable to save',error);
// });

module.exports={Todo};
