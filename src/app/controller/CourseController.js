//Dinh nghia cac funtion
const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

// let DB = {}

class CourseController {
    // [GET] /news
    show(req, res, next) {
        res.send('Courses show');
    }
}

module.exports = new CourseController();
