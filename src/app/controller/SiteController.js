//Dinh nghia cac funtion
const Course = require('../models/Course');
const Account = require('../models/Account');
const { mutipleMongooseToObject } = require('../../util/mongoose');

// let DB = {}

class SiteController {
    // [GET] /news
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });

                // courses = courses.map(course => course.toObject())
                // DB.courses = courses
                // Account.find({})
                //     .then(accounts =>{
                //         accounts = accounts.map(account => account.toObject())
                //         // DB.accounts = accounts
                //     })
                //     .catch(next)
            })
            .catch(next);
    }
    // [GET] /news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
