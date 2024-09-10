import mongoose from "mongoose";

//set up mongoose connection
let isConnected = false;

export const connectToDB = async () => {
  try {
    if (isConnected) {
      console.log("Using existing connection");
      return;
    }

    const connection = await mongoose.connect(
      process.env.MONGODB_URI || "",
      {}
    );
    isConnected = connection.connections[0].readyState ? true : false;
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
};
