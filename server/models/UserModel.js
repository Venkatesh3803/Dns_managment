import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    postal: {
        type: String,
    },
  
}, { timestamps: true })

export default mongoose.model("user", UserSchema)
