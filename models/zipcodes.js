/* eslint-disable prettier/prettier */
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

  // Zipcodes.associate = function(models) {
  //   Zipcodes.hasMany(models.stateTax); 
  // };

  return Zipcodes;
};