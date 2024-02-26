import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AuthRoute from "./routes/AuthRoute.js"
import UserRoute from "./routes/UserRoute.js"
import TaskRoute from "./routes/TaskRoute.js"
import cors from "cors"

const app = express();
const port = 5000;


// configrations
dotenv.config()
app.use(express.json())
app.use(cors())


// connection to mongodb

const connect = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("connected to mongo")
    }).catch((err) => { throw err })
}

app.get("/", (req, res) => {
    res.send("Wellcome to k-rite MERN Stack Backend assessment")
})

app.listen(port, () => {
    connect()
    console.log(`app is listening at port ${port}`)
})


//  routes
app.use("/api/auth", AuthRoute)
app.use("/api/user", UserRoute)
app.use("/api/task", TaskRoute)
