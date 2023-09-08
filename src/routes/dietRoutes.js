import express from 'express';
import {getDietPlan} from "../controller/dietContoller.js";
const router = express.Router()

router.post('/getDietPlan', getDietPlan)

export default router