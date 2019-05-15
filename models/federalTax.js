module.exports = function (sequelize, DataTypes) {
  var FederalTax = sequelize.define("federaltax", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    income: DataTypes.INTEGER,
    rate: DataTypes.DECIMAL,

  }, {
    timestamps: false
  });

  return FederalTax;
};