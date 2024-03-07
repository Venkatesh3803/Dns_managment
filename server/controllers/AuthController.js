import UserModel from "../models/UserModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hassPass = await bcrypt.hash(req.body.password, salt)
    req.body.password = hassPass;
    const newUser = await UserModel(req.body)
    try {
        const existUser = await UserModel.findOne({ username: newUser.username });
        if (existUser) return res.status(404).json("Username Already")
        const user = await newUser.save();
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}



export const loginUser = async (req, res) => {
    try {
        const user = await UserModel.findOne({ username: req.body.username });
        if (!user) return res.status(404).json("Invalid Credentials")
        const validity = await bcrypt.compare(user.password, req.body.password)
        if (validity) return res.status(404).json("Invalid Credentials")

        const token = jwt.sign({
            id: user._id, username: user.username
        }, process.env.JWT, { expiresIn: "24h" })

        const { password, ...other } = user._doc
        res.status(200).json({ ...other, token })
    } catch (error) {
        res.status(500).json(error.message)
    }
}