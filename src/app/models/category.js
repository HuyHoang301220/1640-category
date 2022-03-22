const mongoose = require('mongoose')

const slug = require('mongoose-slug-generator')

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Category = new Schema({
    categoryName: {type: String, required: true},
    description: {type: String, maxlength: 255},
    slug: {type: String, slug: 'categoryName', unique: true}
},{
    timestamps: true
})

module.exports = mongoose.model('Category', Category);