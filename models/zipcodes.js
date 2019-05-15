module.exports = function(sequelize, DataTypes) {
  var Zipcodes = sequelize.define("zipcodes", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    zip: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    stateid: DataTypes.INTEGER,
  }, {
    timestamps: false
  });

  Zipcodes.associate = function(models) {
    console.log(models)
    Zipcodes.hasMany(models.statetax, {foreignKey: 'stateid', sourceKey: 'stateid'}); 
  };

  return Zipcodes;
};