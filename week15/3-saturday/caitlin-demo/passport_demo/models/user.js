const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {

    class User extends Model {}

    User.init({
    // Model attributes are defined here
        username: {
            type: DataTypes.STRING, //this can change. a github user can change this
            allowNull: false
        },
        githubId: {
            type: DataTypes.INTEGER, //this never changes
            allowNull: false
        },
        profileUrl: {
            type: DataTypes.STRING, //this can change
            allowNull: false
        }
        }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'User', // We need to choose the model name
        freezeTableName: true
    });

    return User;
}