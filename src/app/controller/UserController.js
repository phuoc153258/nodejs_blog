const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

//Dinh nghia cac funtion
class UserController {
    // [GET] /news
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('./user/stored', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new UserController();
