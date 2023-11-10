import mongoose from "mongoose";

const Schema = mongoose.Schema;
const transactionsSchema = new Schema({
  _id: { type: String, required: true },
  account_id: { type: Number, required: true },
  transaction_count: { type: Number, required: true },
  bucket_start_date: { type: Date, required: true },
  bucket_end_date: { type: Date, required: true },
});

export default mongoose.model("transactions", transactionsSchema);
