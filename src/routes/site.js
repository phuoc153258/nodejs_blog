const express = require('express');
const router = express.Router();

const siteController = require('../app/controller/SiteController');

// router.use('/:slug',newsController.show)
router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
