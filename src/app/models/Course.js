const mongoose = require('mongoose')
const slug =require('mongoose-slug-generator')
mongoose.plugin(slug)
const Schema = mongoose.Schema;
const Course = new Schema({
    name: { type: String, default: 'hahaha' },
    description: { type: String, min: 18, index: true },
    slug: { type: String, min: 5, slug:'name', unique:true },
    image:{ type:String, default:''},
    createAt: {type:Date, default: Date.now},
    updateAt: {type:Date, default: Date.now},
})

module.exports =mongoose.model('Course', Course)