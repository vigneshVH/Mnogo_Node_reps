const {MongoClient,ObjectId}=require('mongodb');

  MongoClient.connect('mongodb://localhost:27017/TODOAPP',(error,db)=>
  {
    if(error)
    {
      console.log('unable to connect',error);
    }
      console.log('DataBase connected');

    // db.collection('TODOS').findOneAndUpdate({location:'chennai'},{$set:{location:"trichy"}},{returnOriginal:false}).then((res)=>
    // {
    //   console.log("uodated");
    // }),(err)=>
    // {
    //     console.log(err);
    // }
    //

db.collection('TODOS').findOneAndUpdate({location:'trichy'},{$inc:{age:2}},{returnOriginal:false}).then((res)=>
{
  console.log("Increment happen",res);
},(error)=>
{
  console.log("Unable to increase");
});


  });
