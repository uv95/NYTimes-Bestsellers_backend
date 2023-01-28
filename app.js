const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const markedBookRouter = require('./routes/markedBookRouter');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(mongoSanitize());

//ROUTES
app.use('/marked', markedBookRouter);
app.use('/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError('Page not found', 404));
});

app.use(globalErrorHandler);

module.exports = app;
