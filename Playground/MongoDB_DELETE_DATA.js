const {MongoClient,ObjectId}=require('mongodb');

  MongoClient.connect('mongodb://localhost:27017/TODOAPP',(error,db)=>
  {
    if(error)
    {
      console.log('unable to connect',error);
    }
      console.log('DataBase connected');

      //deleteMany
    // db.collection("TODOS").deleteMany({name:'vicky'}).then((res)=>
    // {
    //       console.log("delete completed",res);
    // },(error)=>
    //   {
    //       console.log('unable to delete',error);
    //   });
     //deleteOne
     // db.collection('TODOS').deleteOne({location:'chennai'}).then((res)=>
     // {
     //   console.log("delete completed");
     // },(error)=>
     //    {
     //       console.log('unable to delete',error);
     //  });

     //findOnedeleteOne

     // db.collection('TODOS').findOneAndDelete({name:'vicky'}).then((res)=>
     // {
     //    console.log("delete completed");
     // },(error)=>
     // {
     //   console.log("delete failed");
     // });


     db.collection('TODOS').findOneAndDelete({_id:new ObjectId("5afe64684e8081264d4ad418")}).then((res)=>
     {
        console.log("delete completed");
     },(error)=>
     {
       console.log("delete failed");
     });


  });
