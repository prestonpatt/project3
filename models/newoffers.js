module.exports = function (sequelize, DataTypes) {
    var NewOffers = sequelize.define("newoffers", {
      zip: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      currentSalary: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bonus: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      otherIncome: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      timestamps: false
    });
  
    NewOffers.associate = function(models) {
      console.log(models)
      // NewOffers.belongsTo(models.users, {foreignKey: 'id', sourceKey: 'id'}); 
    };

    return NewOffers;
  };