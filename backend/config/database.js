const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongod = null;

const connectDB = async () => {
  try {
    let dbUrl = process.env.MONGODB_URI || process.env.MONGO_URL;

    if (process.env.NODE_ENV === 'test' || !dbUrl || dbUrl.includes('localhost')) {
      console.log('Starting MongoDB Memory Server...');
      mongod = await MongoMemoryServer.create();
      dbUrl = mongod.getUri();
      console.log(`MongoDB Memory Server started at: ${dbUrl}`);
    }

    const conn = await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
