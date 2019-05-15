module.exports = function (sequelize, DataTypes) {
  var StateTax = sequelize.define("statetax", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    state: DataTypes.STRING,
    rate: DataTypes.DECIMAL,
    income: DataTypes.INTEGER,
    stateid: DataTypes.INTEGER

  }, {
    timestamps: false
  });

  return StateTax;
};