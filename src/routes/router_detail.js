const express = require('express');
const router = express.Router();
const detailController = require('../app/controllers/DetailController');

router.get('/create', detailController.create);
router.get('/detail/:slug', detailController.detail);
router.post('/store', detailController.store);
router.post('/detail/:slug/update', detailController.update);
router.post('/detail/:slug/delete', detailController.delete);
router.get('/:slug', detailController.timkiem);

// router.get('/', detailController.index);

module.exports = router;
