class SearchControllers {
    // [GET] /[options]
    timkiem(req, res) {
        res.render('pages/search.hbs');
    }
}

module.exports = new SearchControllers();
