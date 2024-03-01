import mongoose from "mongoose";

export default async function connectingToDB (){
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB Connected...");
    } catch (error) {
        console.log("Error connecting to DB: ", error.message);
    }
}