const express = require('express');

const markedBookController = require('../controllers/markedBookController');
const authController = require('../controllers/authController');

const router = express.Router();
router.use(authController.protect);

router.route('/').get(markedBookController.getAllMarkedBooks);

router
  .route('/bookmarks')
  .post(markedBookController.setUserId, markedBookController.addToBookmarks);

router
  .route('/finished')
  .post(markedBookController.setUserId, markedBookController.addToFinished);
router
  .route('/:id')
  .patch(markedBookController.setUserId, markedBookController.updateMarkedBook);

module.exports = router;
