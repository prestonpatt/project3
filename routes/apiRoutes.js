var db = require("../models");
var axios = require("axios");
const API_KEY = process.env.NUMBEOKEY
var queryURL = "http://www.numbeo.com:8008/api/cities?api_key=" + API_KEY + "&query=" + "Dallas"

module.exports = function (app) {
  // Get all examples
  app.get("/api/drinks", function (req, res) {
    var options = {};


    if (req.query.attributes) {
      options.attributes = req.query.attributes.split(",");
    }
    if (req.query.limit) {
      options.limit = parseInt(req.query.limit);
    }

    if (req.query.find) {
      options.include = {
        model: db.ingredients,
        where: { strName: { like: '%' + req.query.find + '%' } }
      };
    }

    db.drinks.findAll(options).then(function (result) {
      res.json(result);
    });
  }),


    app.get("/api/user/:id", function (req, res) {
      db.users.findOne({
        where: {
          id: req.params.id
        },
        // include: [db.ingredients]
      }).then(function (result) {
        res.json(result);
      });
      // res.status(200)
    });

  app.post("/api/userinfo/:drinkId", function (req, res) {
    db.drinks.findOne({
      where: {
        id: req.params.drinkId
      },
      include: [db.ingredients]
    }).then(function (result) {
      res.json(result);
    });
    // res.status(200)
  });

  app.put("/api/record", function (req, res) {
    db.users.update(req.body,
      {
        where: {
          id: req.body.id
        },
        zipCode: req.body.zipCode,
        currentSalary: req.body.currentSalary,
        bonus: req.body.bonus,
        otherIncome: req.body.otherIncome,
      })
      .then(function (result) {
        res.json(result);
      });
  });

  // axios
  //   .get(queryURL).then(function (response) {
  //     console.log(response);
  //   });
};

// /register
// /signin
// /user