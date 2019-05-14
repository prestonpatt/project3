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

  // FederalTax.associate = function (models) {
  //   FederalTax.belongsTo(models.zipcodes);
  // };
  return FederalTax;
};