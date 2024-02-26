import UserModel from "../models/UserModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserModel.findById(id);
        if (!user) return res.status(404).json("User not found")
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserModel.findById(id);
        if (!user) return res.status(404).json("User not found")
        await UserModel.findByIdAndUpdate(user, req.body);
        res.status(200).json("updated Sucessfully")
    } catch (error) {
        res.status(500).json(error.message)

    }
}


export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserModel.findById(id);
        if (!user) return res.status(404).json("User not found")
        await UserModel.findByIdAndDelete(user);
        res.status(200).json("Deleted Sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}