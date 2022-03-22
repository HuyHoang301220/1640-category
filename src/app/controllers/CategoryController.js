
const {mongooseToObject, mutipleMongooseToObject} = require('../../util/mongoose');

const Category = require('../models/category')
class CategoryController{
    index(req,res,next){

        Category.find({})
                .then(categories=> {
                    res.render('categories/index',{
                        categories: mutipleMongooseToObject(categories),
                    })
                    // res.json(categories)
                })
                .catch(error=> next(error));
    }
    create(req,res,next){
        res.render('categories/create')
    }
    manage(req,res,next){
        const category = new Category(req.body);
        category.save()
        .then(()=> res.redirect('/categories/'))
        .catch(error => {})
    }
    edit(req,res,next){
        Category.findById(req.params.id)
        .then(category => res.render('categories/edit', {
            category: mongooseToObject(category),
        }))
        .catch(next) 
    }
    // [PUT] / categories/:id
    update(req,res,next){
        Category.updateOne({_id: req.params.id}, req.body)
        .then(()=> res.redirect('/me/manage/categories'))
        .catch(next)
    }
}
module.exports = new CategoryController();