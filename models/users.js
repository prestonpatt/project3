module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
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
        }
    },
    {
        timestamps: false
    });
    return Users;
};