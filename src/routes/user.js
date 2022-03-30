const express = require('express');
const router = express.Router();

const userController = require('../app/controller/UserController');

router.get('/stored/courses', userController.index);
router.get('/trash/courses', userController.trash);

module.exports = router;
