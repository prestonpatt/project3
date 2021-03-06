module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140],
                is: /^[a-z]+$/i,
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140],
                is: /^[a-z]+$/i,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zip: {
            type: DataTypes.BIGINT,
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
        },
        newZipcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        newCurrentSalary: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        newBonus: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        newOtherIncome: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false
    });

    Users.associate = function(models) {
        Users.belongsTo(models.zipcodes, {foreignKey: 'zip', sourceKey: 'zip'}) 
      };
    return Users;
};