var express = require('express');
var app = express.Router();
var passport = require('passport');
var bcrypt = require('bcrypt');
LocalStrategy = require('passport-local').Strategy;
var db = require('../models');

module.exports = function (app) {
    passport.use(new LocalStrategy(
        function (username, password, done) {
            db.users.findOne(
                {
                    where: {
                        email: username
                    }
                }).then(function (user, err) {
                    if (err) {
                        return done(err);
                    }
                    if (!user) {
                        return done(null, false, {
                            message: 'Incorrect username.'
                        });
                    }
                    if (!user.validPassword(password)) {
                        return done(null, false, {
                            message: 'Incorrect password.'
                        });
                    }
                    if (!bcrypt.compareSync(password, user.password)) {
                        return done(null, user);
                    }
                    return done(null, user);
                });
        }
    ));
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        db.users.findOne(
            {
                where: {
                    id: id
                }
            }).then(function (err, user) {
                done(err, user);
            });
    });
    app.get('/api/record/:id', function (req, res, next) {
        db.users.findOne({
            where: {
              id: req.params.id
            },
          }).then(function (result) {
            res.json(result);
          });
    });

    app.post('/api/record', function (req, res, next) {
        var hash = bcrypt.hashSync(req.body.password, 10);
        db.users.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            zip: req.body.zip,
            currentSalary: req.body.currentSalary,
            bonus: req.body.bonus,
            otherIncome: req.body.otherIncome,
            newZipcode: req.body.newZipcode,
            newCurrentSalary: req.body.newCurrentSalary,
            newBonus: req.body.newBonus,
            newOtherIncome: req.body.newOtherIncome,
        }).then(function (result) {
            res.json(result);
        });
    });


    app.post('/signin',
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        })
    );
    
    function isLoggedIn(reg, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
};