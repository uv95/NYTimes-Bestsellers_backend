const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION ❗️', err.name, err.message, err);
  process.exit(1);
});

dotenv.config();
const app = require('./app');

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`App running on port ${port}...`)
);

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION ❗️', err.name, err.message);
  server.close(() => process.exit(1));
});
