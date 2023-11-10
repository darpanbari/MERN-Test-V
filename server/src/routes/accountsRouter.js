import express from "express";
import { getAccountsProducts } from "../controllers/accountsController.js";

const router = express.Router()

router.get('/get-accounts-products', getAccountsProducts)

export default router;