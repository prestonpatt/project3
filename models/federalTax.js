module.exports = function (sequelize, DataTypes) {
  var FederalTax = sequelize.define("federaltax", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    rate: DataTypes.DECIMAL,
    income: DataTypes.INTEGER,

  }, {
    timestamps: false
  });

  return FederalTax;
};