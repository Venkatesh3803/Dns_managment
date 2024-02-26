import TaskModel from "../models/TaskModel.js"

export const createTask = async (req, res) => {
    try {
        const newTask = await TaskModel(req.body);
        const task = await newTask.save();
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json(error.message)
    }
}



export const updateTask = async (req, res) => {
    const id = req.params.id;
    try {
        const task = await TaskModel.findById(id);
        await TaskModel.findByIdAndUpdate(task, req.body)
        res.status(200).json("Updated Sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const deleteTask = async (req, res) => {
    const id = req.params.id;
    try {
        const task = await TaskModel.findById(id);
        await TaskModel.findByIdAndDelete(task)
        res.status(200).json("Deleted Sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const getSingleTask = async (req, res) => {
    const id = req.params.id;
    try {
        const task = await TaskModel.findById(id);
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const getAllTasks = async (req, res) => {
    const q = req.query;

    const filters = {
        ...(q.status && { status: q.status }),
        ...(q.userid && { userId: q.userid }),
        ...(q.title && { title: { $regex: q.title, $options: "i" } }),
    };
    try {
        const task = await TaskModel.find(filters).sort({ createdAt: -1 });
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json(error.message)
    }
}