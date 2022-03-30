const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

//Dinh nghia cac funtion
class UserController {

    // [GET] /user/stored/courses
    index(req, res, next) {

        Promise.all([ Course.find({}), Course.countDocumentsDeleted() ])
            .then(([courses,deletedCount]) => {
                res.render('./user/stored', {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next)

    }

    //[GET] /user/trash/courses
    trash(req, res, next) {
        Course.findDeleted({})
            .then((courses) => {
                res.render('./user/trash', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new UserController();
