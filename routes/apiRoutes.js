var db = require("../models");
var axios = require("axios");
const API_KEY = process.env.NUMBEOKEY
var queryURL = "http://www.numbeo.com:8008/api/cities?api_key=" + API_KEY + "&query=" + "Dallas"

module.exports = function (app) {
  // Get all examples
  app.get("/api/zipCodes/:zip", function (req, res) {
      db.zipcodes.findOne({
        where: {
          zip: req.params.zip
        },
      }).then(function (result) {
        res.json(result);
      });
      // res.status(200)
    
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

  app.post("/api/newoffers", function (req, res) {
    db.newoffers.create({
        zipCode: req.body.zipCode,
        currentSalary: req.body.currentSalary,
        bonus: req.body.bonus,
        otherIncome: req.body.otherIncome,
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