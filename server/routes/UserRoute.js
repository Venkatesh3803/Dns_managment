import express from "express"
import { deleteUser, getAllUsers, getSingleUser, updateUser } from "../controllers/UserController.js";
import { verifyUser } from "../middleware/VerifyJwt.js";
const router = express.Router();

router.get("/:id", getSingleUser)
router.get("/all",verifyUser, getAllUsers)
router.patch("/:id",verifyUser , updateUser)
router.delete("/:id", verifyUser,  deleteUser)

export default router