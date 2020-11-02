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
    // [GET] detail/slug
    detail(req, res, next) {
        Course.findOne({slug: req.params.slug})
        .then(data=>{
            res.render('pages/update.hbs', {course:mongooseToObject(data)})
        })
        .catch(next)
    }
    // [POST] details/slug/update
    update(req,res, next){
        var name = req.body.name
        var description = req.body.description
        Course.update({name:name, description:description})
        .then(()=> {
            console.log("SUCCESS!!!")
            return res.redirect('/search/search')
            }
        )
        .catch(next, console.log("ERROR"))
    }
    delete(req,res, next){
        Course.findOneAndDelete({slug: req.params.slug})
        .then(()=>{
            console.log("DELETE SUCCESS!!!")
            res.redirect('/search/search')
        }).catch(next)
    }
}

module.exports = new SearchControllers();
