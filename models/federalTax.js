module.exports = function (sequelize, DataTypes) {
  var FederalTax = sequelize.define("federaltax", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    rate: DataTypes.DOUBLE,
    income: DataTypes.INTEGER,

  }, {
    timestamps: false
  });

  return FederalTax;
};