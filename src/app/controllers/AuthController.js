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
                if(user){
                    jwt.sign(mongooseToObject(user), "secret", { expiresIn: "120s"}, function(err, token) {
                        res.json({
                            message: "thanh cong",
                            token: token
                        })
                    });
                }
                else {
                    res.json("That bai")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    private(req, res, next){
        let token = req.cookies.token
        console.log(token)
        jwt.verify(token, 'secret', function(err, decoded) {
            if(err) res.redirect('/auth')
            if(decoded) res.json(decoded)
            else res.json('that bai')
        });
    }
}

module.exports = new AuthController();
