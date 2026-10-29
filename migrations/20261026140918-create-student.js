'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      firstName: {
        type: Sequelize.STRING,
       allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
       allowNull: false,
       unique: true,
      },
      
        gender: {
        type: Sequelize.ENUM('male', 'female'),
        allowNull: false,
        },
        status: {
        type: Sequelize.ENUM('active', "suspended",'graduated'),
        allowNull: false,
        defaultValue: 'active',
        },  
      
        createdAt: {
        allowNull: false,
        type: Sequelize.DATE
        },
        updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
        }
        });
        },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};