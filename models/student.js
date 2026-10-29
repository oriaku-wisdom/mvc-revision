'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  student.init({
     id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
     },
      firstName: {
        type: DataTypes.STRING,
       allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
       allowNull: false,
       unique: true,
      },
      
        gender: {
        type: DataTypes.ENUM('male', 'female'),
        allowNull: false,
        },
        status: {
        type: DataTypes.ENUM('active',  "suspended" , 'graduated'),
        allowNull: false,
        defaultValue: 'active',
        },  
      
        createdAt: {
        allowNull: false,
        type: DataTypes.DATE
        },
        updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
        }
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};