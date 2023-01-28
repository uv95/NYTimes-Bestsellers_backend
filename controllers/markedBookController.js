const MarkedBook = require('../models/markedBookModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.setUserId = (req, res, next) => {
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.addToBookmarks = catchAsync(async (req, res, next) => {
  const book = await MarkedBook.findOne({
    title: req.body.title,
    author: req.body.author,
  });

  if (book) {
    book.isBookmarked = true;
    await book.save();

    res.status(200).json({
      status: 'success',
      data: book,
    });
  }
  if (!book) {
    const newBook = await MarkedBook.create({
      ...req.body,
      isBookmarked: true,
    });

    res.status(201).json({
      status: 'success',
      data: newBook,
    });
  }
});

exports.addToFinished = catchAsync(async (req, res, next) => {
  const book = await MarkedBook.findOne({
    title: req.body.title,
    author: req.body.author,
  });

  if (book) {
    book.isFinished = true;
    await book.save();

    res.status(200).json({
      status: 'success',
      data: book,
    });
  }

  if (!book) {
    const newBook = await MarkedBook.create({
      ...req.body,
      isFinished: true,
    });

    res.status(201).json({
      status: 'success',
      data: newBook,
    });
  }
});

exports.removeFromBookmarks = catchAsync(async (req, res, next) => {
  const book = await MarkedBook.findById(req.params.id);

  if (!book) return next(new AppError('No book found!', 404));

  book.isBookmarked = false;
  await book.save();

  res.status(200).json({
    status: 'success',
    data: book,
  });
});

exports.removeFromFinished = catchAsync(async (req, res, next) => {
  const book = await MarkedBook.findById(req.params.id);

  if (!book) return next(new AppError('No book found!', 404));

  book.isFinished = false;
  await book.save();

  res.status(200).json({
    status: 'success',
    data: book,
  });
});

exports.getAllMarkedBooks = factory.getAll(MarkedBook);