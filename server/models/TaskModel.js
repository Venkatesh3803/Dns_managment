import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    due_Date: {
        type: String,
    },
    status: {
        type: String,
        default: "started"
    },
}, { timestamps: true })

export default mongoose.model("tasks", TaskSchema)
