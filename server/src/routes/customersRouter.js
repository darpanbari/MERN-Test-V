import express from "express";
import { getActiveCustomers, loginCustomer } from "../controllers/customersController.js";

const router = express.Router()

router.get('/get-customers', getActiveCustomers)
router.post("/auth/login", loginCustomer);

export default router;