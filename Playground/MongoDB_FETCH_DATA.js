const {MongoClient,ObjectId}=require('mongodb');

  MongoClient.connect('mongodb://localhost:27017/TODOAPP',(error,db)=>
  {
    if(error)
    {
      console.log('unable to connect',error);
    }
      console.log('DataBase connected');

      // db.collection("TODOS").find().toArray().then((docs)=>
      // {
      //   console.log('TODOS');
      //   console.log(JSON.stringify(docs,undefined,2));
      // },(err)=>
      // {
      // console.log('unable to fetch data',err);
      // });
      //
      // db.collection('TODOS').find({age:22}).count().then((count)=>
      // {
      //   console.log('number of inserts',count);
      // },(error)=>
      //   {
      //       console.log("unable to count it");
      //   }
      // );

      // db.collection('USER').find().toArray().then((docs)=>
      // {
      //   console.log('your documents are',docs);
      //
      // },(error)=>
      //   {
      //     console.log("unable to connect user",error);
      //   }
      // );
      //

  });
