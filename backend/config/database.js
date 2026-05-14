const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbUrl = process.env.MONGODB_URI || process.env.MONGO_URL;

    if (!dbUrl) {
      throw new Error(
        'No MongoDB connection string found. Set the MONGODB_URI or MONGO_URL environment variable.'
      );
    }

    const conn = await mongoose.connect(dbUrl);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
