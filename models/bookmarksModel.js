const mongoose = require('mongoose');

const bookmarksSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'User',
  },
  books: [
    {
      title: {
        type: String,
      },
      author: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model('Bookmarks', bookmarksSchema);
