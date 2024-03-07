import express from "express";
import { createDns, deleteDns, getAllDns, getSingleDns, updateDns } from "../controllers/DnsController.js";
import { verifyJwt, verifyUser } from "../middleware/VerifyJwt.js";

const router = express.Router();

router.post('/create', verifyUser, createDns)
router.get('/all', getAllDns)
router.get('/:id', getSingleDns)
router.patch('/:id', verifyUser, updateDns)
router.delete('/:id', verifyUser, deleteDns)

export default router