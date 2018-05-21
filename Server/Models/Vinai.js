


var mongoose=require('mongoose');

var Vinai=mongoose.model('vinai',{text:{type:String},completed:{type:Boolean},completedAt:{type:Number}});

var orVinai=new Vinai({text:"my name vinai"});

// orVinai.save().then((doc)=>
// {
//   console.log(JSON.stringify(doc,undefined,3));
//
//
// },(err)=>
// {
//   console.log("sorry error",err)
// });


module.exports={Vinai};
