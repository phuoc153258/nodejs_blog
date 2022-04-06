const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

//Dinh nghia cac funtion
class UserController {
    // [GET] /user/stored/courses
    stored(req, res, next) {
        let courseQuery = Course.find({})

        if(req.query.hasOwnProperty('_sort')){
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type
            })
        }

        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => {
                res.render('./user/stored', {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
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
