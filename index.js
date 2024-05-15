const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const seedDatabase = require('./src/seeds/seed');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/crudApplicationEmployee', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Call seedDatabase function
// seedDatabase();

// Routes
const employeeRoutes = require('./src/routes/employee');

app.use('/api/employees', employeeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
