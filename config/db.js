import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONN_URL);
  } catch (error) {
    
  }
};

export default connectDB;