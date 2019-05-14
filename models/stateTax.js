module.exports = function (sequelize, DataTypes) {
  var StateTax = sequelize.define("stateTax", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    state: DataTypes.STRING,
    rate: DataTypes.DECIMAL,
    income: DataTypes.INTEGER

  }, {
    timestamps: false
  });

  // StateTax.associate = function (models) {
  //   StateTax.belongsTo(models.zipcodes);
  // };
  // return StateTax;
};