const mongoose = require('mongoose')

const slug = require('mongoose-slug-generator')

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Category = new Schema({
    categoryName: {type: String, required: true, unique: true},
    description: {type: String, maxlength: 255},
    slug: {type: String, slug: 'categoryName'}
},{
    timestamps: true
})

module.exports = mongoose.model('Category', Category);