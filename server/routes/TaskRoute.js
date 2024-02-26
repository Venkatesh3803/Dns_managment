import express from "express";
import { createTask, deleteTask, getAllTasks, getSingleTask, updateTask } from "../controllers/TaskController.js";
const router = express.Router();

router.post('/create', createTask)
router.get('/all', getAllTasks)
router.get('/:id', getSingleTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router