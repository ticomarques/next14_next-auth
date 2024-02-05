import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI_CLOUD)
        console.log("Connected to mongo cloud")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB