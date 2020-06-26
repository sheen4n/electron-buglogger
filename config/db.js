const mongoose = require('mongoose');
const { MONGO_DB_URI } = require('./config');

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
