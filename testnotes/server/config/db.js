import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('mongoDb connected successfully');
    } catch (error) {
        console.log(`Failed to connect mongoDb: ${error.message}`);
    }
}
