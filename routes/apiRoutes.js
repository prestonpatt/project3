var db = require("../models");

module.exports = function (app) {

  app.get("/api/zip/:zip", function (req, res) {
      db.zipcodes.findOne({
        where: {
          zip: req.params.zip
        },
        include: db.statetax
      }).then(function (result) {
        res.json(result);
      });
  }),

  app.get("/api/federal", function (req, res) {
    db.federaltax.findAll().then(function (result) {
      res.json(result);
    });
}),


    app.get("/api/user/:id", function (req, res) {
      db.users.findOne({
        where: {
          id: req.params.id
        },
        include: [db.zipcodes]
      }).then(function (result) {
        res.json(result);
      });
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
};
