import dotenv from "dotenv";
dotenv.config();
// import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(5000, () => {
      console.log(`App is running on the port number 5000`);
    });
  })
  .catch((err) => {
    console.log(`Error in db`);
  });
