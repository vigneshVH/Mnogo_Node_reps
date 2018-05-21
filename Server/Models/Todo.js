
var mongoose=require('mongoose');



var Todo=mongoose.model('Vickies',{
 text:{ type:String,require:true,minlength:3,trim:true},
 completed:{type:Boolean,require:false},
 completedAt:{type:Number}
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
