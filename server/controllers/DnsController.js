import DnsModel from "../models/DnsModel.js";


export const createDns = async (req, res) => {
    try {
        const newDns = await DnsModel(req.body)
        const dns = await newDns.save();
        res.status(201).json(dns)
    } catch (error) {
        res.status(500).json(error.message)
    }
}



export const updateDns = async (req, res) => {
    const id = req.params.id;
    try {
        const dns = await DnsModel.findById(id);
        await DnsModel.findByIdAndUpdate(dns, req.body)
        res.status(200).json("Updated Sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const deleteDns = async (req, res) => {
    const id = req.params.id;
    try {
        const dns = await DnsModel.findById(id);
        await DnsModel.findByIdAndDelete(dns)
        res.status(200).json("Deleted Sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const getSingleDns = async (req, res) => {
    const id = req.params.id;
    try {
        const dns = await DnsModel.findById(id);
        res.status(200).json(dns)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const getAllDns = async (req, res) => {
    const q = req.query;

    const filters = {
        ...(q.priority && { priority: q.priority }),
        ...(q.ip && { ip_version: q.ip }),
        ...(q.name && { name: { $regex: q.name, $options: "i" } }),
    };
    try {
        const dns = await DnsModel.find(filters).sort({ createdAt: -1 });
        res.status(200).json(dns)
    } catch (error) {
        res.status(500).json(error.message)
    }
}