const mongoose = require('mongoose');

const markedBookSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  isBookmarked: {
    type: Boolean,
    required: true,
    default: false,
  },
  isFinished: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model('MarkedBook', markedBookSchema);
