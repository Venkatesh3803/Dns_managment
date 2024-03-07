import mongoose from "mongoose";

const DnsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    ip_version: {
        type: String,
        required: true
    },
    record_type: {
        type: String,
        required: true
    },
    time_to_live: {
        type: String,
    },
    priority: {
        type: String,
        default: "low"
    },
    port: {
        type: String,
        required: true
    },
}, { timestamps: true })

export default mongoose.model("DnsRecords", DnsSchema)
