var db = require("../models");
var Axios = require("axios");
const API_KEY = process.env.NUMBEOKEY
var queryURL = "http://www.numbeo.com:8008/api/indices?api_key=" + API_KEY + "&query=" + "Dallas"

module.exports = function (app) {
  // Get all examples
  app.get("/api/zip/:zip", function (req, res) {
      db.zipcodes.findOne({
        where: {
          zip: req.params.zip
        },
        include: db.statetax
      }).then(function (result) {
        res.json(result);
      });
      // res.status(200)
    
  }),

  app.get("/api/federal", function (req, res) {
    db.federaltax.findAll().then(function (result) {
      res.json(result);
    });
    // res.status(200)
  
}),


    app.get("/api/user/:id", function (req, res) {
      db.users.findOne({
        where: {
          id: req.params.id
        },
        include: [db.zipcodes]
        // include: [db.ingredients]
      }).then(function (result) {
        res.json(result);
      });
      // res.status(200)
    });

  app.post("/api/newoffers", function (req, res) {
    db.newoffers.create({
        zip: req.body.zip,
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
        zip: req.body.zip,
        currentSalary: req.body.currentSalary,
        bonus: req.body.bonus,
        otherIncome: req.body.otherIncome,
      })
      .then(function (result) {
        res.json(result);
      });
  });

//   Axios
//     .get(queryURL).then(function (response) {
//       res.json(response);
//     });
};

// /register
// /signin
// /user