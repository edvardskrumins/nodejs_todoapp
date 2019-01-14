const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err) {
    console.log('Unable to connect to the database');
  }
  console.log('Connected to the database');

  const db = client.db('TodoApp');
  //
  // db.collection('Users').findOneAndUpdate(
  //   { name: 'Edvards'
  // }, {
  //    $set:
  //   {
  //     name: 'Juris'
  //   }
  //   }).then((result) => {
  //     console.log(result);
  //     });
//
  db.collection('Users').findOneAndUpdate(
    {
      name: 'Janeks'
    }, {
      $inc:
      {
        age: 1
      }
    }).then((result) => {
    console.log(result);
  });
});
