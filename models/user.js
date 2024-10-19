'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      User.belongsTo(models.Group, {
        foreignKey: {
          name: 'groupId',
          //allowNull: false
        },
        onUpdate: 'CASCADE', // sync
        onDelete: 'RESTRICT', // sync
      });
      User.belongsToMany(models.Subject, {
        through: 'StunentSubjects',
        foreignKey: 'userId',
      });
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]+$/,
          len: [2, 50],
        },
      },
      lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]+$/,
          len: [2, 50],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      birthday: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          isBefore: new Date().toDateString(),
        },
      },
      isMale: {
        type: DataTypes.BOOLEAN,
      },
      activitiesCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: true,
          min: 0,
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
