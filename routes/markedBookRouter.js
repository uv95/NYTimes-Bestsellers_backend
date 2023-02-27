const express = require('express');

const markedBookController = require('../controllers/markedBookController');
const authController = require('../controllers/authController');

const router = express.Router();
router.use(authController.protect, markedBookController.setUserId);

router.route('/').get(markedBookController.getAllMarkedBooks);

router.route('/bookmarks').post(markedBookController.addToBookmarks);

router.route('/finished').post(markedBookController.addToFinished);
router.route('/:id').patch(markedBookController.updateMarkedBook);

module.exports = router;
