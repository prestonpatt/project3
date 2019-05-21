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

  StateTax.associate = function(models) {
    console.log(models)
    StateTax.belongsTo(models.zipcodes, {foreignKey: 'stateid', sourceKey: 'stateid'}); 
  };
  return StateTax;
};