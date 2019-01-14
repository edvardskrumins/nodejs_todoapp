

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');
  // var db = client.db('TodoApp')
  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos', count);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

var db = client.db('TodoApp');
db.collection('Users').find({
  name: 'Edvards'
}).toArray().then((docs) => {
  console.log('vārdi');
  console.log(JSON.stringify(docs,undefined, 2));
  }, (err) => {
  console.log('Unable to fetch todos', err);
});
});
  //
  // const db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
//   db.collection('Users').insertOne({
//     name: 'some name',
//     age: 'some age',
//     location: 'some location'
//   }, (err, result) => {
//     if(err) {
//       return console.log('Unable to insert into Users', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   })
//
//   db.close();
