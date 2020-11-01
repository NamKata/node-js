const express = require('express');
const router = express.Router();
const detailController = require('../app/controllers/DetailController');

router.get('/create', detailController.create);
router.post('/store', detailController.store);
router.get('/:slug', detailController.timkiem);

// router.get('/', detailController.index);

module.exports = router;
