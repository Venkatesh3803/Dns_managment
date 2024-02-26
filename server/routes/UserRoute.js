import express from "express"
import { deleteUser, getAllUsers, getSingleUser, updateUser } from "../controllers/UserController.js";
const router = express.Router();

router.get("/:id", getSingleUser)
router.get("/all", getAllUsers)
router.patch("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router