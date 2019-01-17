var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    trim: true, // removes whitespace
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    min: [0000, 'Not a valid time'],
    max: 2400,
    default: null

  }
});

module.exports = {
  Todo
};
