const { json } = require('express');
const Course = require('../models/Course')
const {mongooseToObject} = require('../../utils/mongoose')
class SearchControllers {
    // [GET] /[options]
    timkiem(req, res, next) {
        Course.findOne({slug: req.params.slug})
        .then(data=>{
            res.render('pages/details.hbs', {course:mongooseToObject(data)})
        })
        .catch(next)
    }
    //[GET] create
    create(req, res, next){
        res.render('pages/create.hbs')
    }
    //[POST] create
    store(req,res, next){
        // res.json(req.body)
        const formData= req.body
        req.body.image =`https://truyencv.com/templates/truyencv-green/assets/images/logo.png`
        const course = new Course(req.body)
        course.save()
        .then(()=> res.redirect('/search/search'))
        .catch(error=>{})
        // res.send("SUCESSFully")
    }
}

module.exports = new SearchControllers();
