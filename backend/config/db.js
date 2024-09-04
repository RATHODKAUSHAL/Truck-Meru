import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Set strictQuery to true or false as per your requirement
    mongoose.set('strictQuery', false);

    await mongoose.connect('mongodb+srv://rathodkaushal2001:S3SPPuY5CR9Wl3K7@kaushal.w6kbbwb.mongodb.net/TruckMeru', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error: ", error.message);
    // Exit the process with a failure code
    process.exit(1);
  }
};
