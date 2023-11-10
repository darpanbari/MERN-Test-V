import express from "express";
import { getTransactionDetails, getTransactions } from "../controllers/transactionsController.js";

const router = express.Router()

router.get('/get-transactions', getTransactions)
router.get('/get-transactionInfo/:account_id', getTransactionDetails)

export default router;