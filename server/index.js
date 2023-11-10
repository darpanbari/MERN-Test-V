import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import customersRoutes from "./src/routes/customersRouter.js"
import transactionsRoutes from "./src/routes/transactionsRouter.js"
import accountsRoutes from "./src/routes/accountsRouter.js"


const app = express();

//databse config
mongoose.connect("mongodb://localhost:27017/mileexp-test")
  .then(() => {
    console.log("Database successfully connnected!");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

app.use(cors());
app.use(express.json());

//routes
app.use("/customers", customersRoutes);
app.use("/transactions", transactionsRoutes);
app.use("/accounts", accountsRoutes);

//PORT
const PORT = 9090;

//run listen
app.listen(PORT, () => {
  console.log(`Server Running port ${PORT}`);
});
