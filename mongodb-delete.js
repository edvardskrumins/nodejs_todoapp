const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err) {
    console.log('Unable to connect to the database');
  }
  console.log('Connected to the database!');

  const db = client.db('TodoApp');
    // deleteMany
        // db.collection('Todos').deleteMany({text: 'Hello there'}).then((result) => {
        //   console.log(result);
        // });


  // deleteOne
        // db.collection('Todos').deleteOne({text: 'additional document'}).then((result) => {
        //   console.log(result);
        // });
  // findOneAndDelete
      // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
      //   console.log(result);
      // });
  // deleteOneAndDelete using // ID

        db.collection('Todos').findOneAndDelete({_id: new ObjectID('5c3ce4015a05d21244e3fe93')})
        .then((result) => {
          console.log(JSON.stringify(result, undefined, 2));
        });


});
