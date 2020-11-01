const express = require('express');
const router_search = express.Router();
const searchController = require('../../app/controllers/SearchController');

router_search.get('/search/', searchController.timkiem);

module.exports = router_search;
