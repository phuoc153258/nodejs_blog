const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/AuthController');

router.post('/login', authController.login);
router.get('/private', authController.private);
router.get('/', authController.show);

module.exports = router;