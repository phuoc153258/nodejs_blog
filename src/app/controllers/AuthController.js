const Account = require('../models/Account');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
const jwt = require('jsonwebtoken');

class AuthController {
    show(req, res, next) {
        res.render('login')
    }
    login(req, res, next){
        Account.findOne({
            username: req.body.username,
            password: req.body.password
        })
            .then((user) => {
                jwt.sign(mongooseToObject(user), "secret", { expiresIn: "30s"}, function(err, token) {
                    console.log(token);
                    res.json(token)
                });
            })
            .catch(next)
    }
}

module.exports = new AuthController();
