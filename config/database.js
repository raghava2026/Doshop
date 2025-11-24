import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/doshop';
    
    const conn = await mongoose.connect(mongoURI, {
      
    });

    console.log(`MongoDB Connected Successfully!`);
    console.log(`Database: ${conn.connection.name}`);
    console.log(`Host: ${conn.connection.host}:${conn.connection.port}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    console.error(`Make sure MongoDB is running on your local machine`);
    console.error(`Try: net start MongoDB (Windows) or sudo systemctl start mongod (Linux/Mac)`);
    process.exit(1);
  }
};

export default connectDB;

