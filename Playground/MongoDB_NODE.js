//  const MongoClient=require('mongodb').MongoClient;
  //const MongoClient=require('mongodb').MongoClient;

  const {MongoClient,ObjectId}=require('mongodb');



  MongoClient.connect('mongodb://localhost:27017/TODOAPP',(error,db)=>
  {
    if(error)
    {
      console.log("unable to connect database");
    }
    console.log('DataBase connected');

// db.collection('TODOS').insertOne(
//   {name:'vicky',age:22},(err,result)=>
// {
//   if(err)
//   {
//     console.log('unable to conect to database',err);
//   }
//
//   console.log(JSON.stringify(result.ops,undefined,2));
//
// });



      // db.collection('USER').insertOne({name:'vignesh varan',age:22,location:'Bangalore'},(err,result)=>
      // {
      //     if(err)
      //     {
      //       console.log('unable to connect USER',err);
      //     }
      //   //  console.log(JSON.stringify(result.ops,undefined,2));


        //console.log(result.ops[0]._id.getTimestamp());
      // });




    db.close();
  });
