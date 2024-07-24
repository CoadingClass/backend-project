import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB is Connected !! DB HOST :=> ${connectionInstance.connection.host}`
    );
    console.log(`⚙︎ Server is runnig on http://localhost:${process.env.PORT}`);
  } catch (error) {
    console.error("MONGODB Connectin FAILD !!!! :", error);
    throw error;
  }
  // console.log(`MONGO_URL :=> ${process.env.MONGODB_URI}`);
  // console.log(`PORT NUMBER :=> ${process.env.PORT}`);
  // console.log(`name :=> ${DB_NAME}`);
};

export default connectDB;
