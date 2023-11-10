import mongoose from "mongoose";

const Schema = mongoose.Schema;
const customersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  accounts: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model("customer", customersSchema);
