class NewControllers{
    // [GET] /[options]
    index(req, res){
        res.render("pages/home.hbs");
    }
    // [GET] [Options] [SLUG]
    show(req, res){
        res.send('NEW DETAILS!!!');
    }
};

module.exports = new NewControllers;
