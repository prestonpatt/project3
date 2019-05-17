module.exports = function (sequelize, DataTypes) {
    var UserInfo = sequelize.define("userinfo", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      income: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bonus: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      other: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      timestamps: false
    });
  
    return UserInfo;
  };