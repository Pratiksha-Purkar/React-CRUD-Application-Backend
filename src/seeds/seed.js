const mongoose = require('mongoose');
const Employee = require('../models/employee');
const { employees } = require('./seedData');

// Insert seed data into collections
async function seedDatabase() {
  try {
    await Employee.deleteMany(); // Clear existing employees
    await Employee.create(employees);

    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  }
}

module.exports = seedDatabase;
