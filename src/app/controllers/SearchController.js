const { json } = require('express');
const Course = require('../models/Course')
const {mutipleMongooseObjects} = require('../../utils/mongoose')
class SearchControllers {
    // [GET] /[options]
    timkiem(req, res) {
        Course.find({})
        .then(data =>{ 
            // data= data.map(data=> data.toObject())
            res.render('pages/search.hbs', {Course: mutipleMongooseObjects(data)})
        })
        .catch(Error);
        // .catch(error => next(error))
        // Course.find({}, function (err, courses) {
        //     if(!err){ 
        //         res.jsonp({"course":courses})
        //     }
        //     else{
        //         next(err)
        //         // res.status(400).json({error: "ERROR 400"})
        //     }
        // });
        // res.render('pages/search.hbs');
    }
}

module.exports = new SearchControllers();
