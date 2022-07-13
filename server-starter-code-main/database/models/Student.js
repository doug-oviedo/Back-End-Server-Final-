/*==================================================
/database/database/models/Student.js

It defines the student model for the database.
==================================================*/
const sequelize = require('sequelize');
const { DECIMAL } = require('sequelize');
const { RANGE } = require('sequelize');
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "https://picsum.photos/200/200",
    allowNull: true
  },

  GPA: {
    type: Sequelize.DECIMAL,
    allowNull:false, 
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
});

// Export the student model
module.exports = Student;