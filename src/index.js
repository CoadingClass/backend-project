import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: ".env",
}); // Load environment variables from .env file

connectDB();

// import { config } from "dotenv";
// config();
// import express from "express";
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERROR: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(
//         `⚙︎ Server is running on http://localhost:${process.env.PORT}`
//       );
//     });
//   } catch (error) {
//     console.error("ERROR : ", error);
//     throw error;
//   }
// })();
