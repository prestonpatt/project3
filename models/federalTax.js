module.exports = function (sequelize, DataTypes) {
  var StateTax = sequelize.define("stateTax", {
    state: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    bracket: DataTypes.INTEGER

  }, {
    timestamps: false
  });

  StateTax.associate = function (models) {
    StateTax.belongsTo(models.zipcodes);
  };
  return StateTax;
};