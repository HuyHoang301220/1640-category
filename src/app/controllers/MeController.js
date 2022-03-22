const Category = require('../models/category')
const { mutipleMongooseToObject} = require('../../util/mongoose')


class MeController {
    // [GET] /me/stored/courses

    manageCategories(req, res,next) {
        Category.find({})
        .then(categories => res.render('me/manage-categories',{
            categories: mutipleMongooseToObject(categories)
        }))
        .catch(next)
        
    }

}

module.exports = new MeController();
