
const {mongoose} = require('./server/db/mongoose');
const {Todo} = require('./server/models/todo');

var id = '5c408ec04f6a7b254c7b2bf1';

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', JSON.stringify(todos, undefined, 2));
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', JSON.stringify(todo, undefined, 2));
});

Todo.findById(id).then((todo) => {
  console.log('Todo by ID', JSON.stringify(todo, undefined, 2));
})
